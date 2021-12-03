const tasksService = require('./task.service');
const { STATUS_CODES } = require('../../common/config');

async function getTasks(req, reply) {
  const { boardId } = req.params;
  const tasks = await tasksService.getTasksByBoardId(boardId);

  reply.send(tasks);
}

async function getTask(req, reply) {
  const { boardId, taskId } = req.params;

  const task = await tasksService.getTaskByBoardId(boardId, taskId);

  if (!task) {
    reply.status(STATUS_CODES.NOT_FOUND).send({
      message: `Task with boardId ${boardId} and taskId ${taskId} ins't found`,
      error: 'NOT_FOUND',
    });
  }

  reply.send(task);
}

async function createTask(req, reply) {
  const { boardId } = req.params;
  const { title, order, description } = req.body;

  const newTask = await tasksService.createTask(boardId, {
    title,
    order,
    description,
  });

  reply.status(STATUS_CODES.CREATED).send(newTask);
}

async function updateTask(req, reply) {
  const { boardId, taskId } = req.params;
  const { title, description, order } = req.body;

  const updatedTask = await tasksService.updateTask(boardId, {
    id: taskId,
    title,
    order,
    description,
  });

  if (!updatedTask) {
    reply.status(STATUS_CODES.NOT_FOUND).send({
      message: `Task with boardId ${boardId} and taskId ${taskId} ins't found`,
      error: 'NOT_FOUND',
    });
  }

  reply.status(STATUS_CODES.OK).send(updatedTask);
}

async function deleteTask(req, reply) {
  const { boardId, taskId } = req.params;

  const result = await tasksService.deleteTask(boardId, taskId);

  if (!result) {
    reply.status(STATUS_CODES.NOT_FOUND).send({
      message: `Board with boardId ${boardId} and taskId ${taskId}  ins't found`,
      error: 'NOT_FOUND',
    });
  }

  reply.send({ ok: result });
}

module.exports = { getTasks, createTask, getTask, deleteTask, updateTask };

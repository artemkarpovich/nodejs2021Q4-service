const boardsService = require('./task.service');
const { STATUS_CODES } = require('../../common/config');

async function getTasks(req, reply) {
  const { boardId } = req.params;
  const tasks = await boardsService.getTasksByBoardId(boardId);

  reply.send(tasks);
}

async function createTask(req, reply) {
  const { boardId } = req.params;
  const { title, order, description } = req.body;

  const newTask = await boardsService.createTask(boardId, {
    title,
    order,
    description,
  });

  reply.status(STATUS_CODES.CREATED).send(newTask);
}

module.exports = { getTasks, createTask };

const tasksRepo = require('./task.memory.repository');
const TaskModel = require('./task.model');

const getTasksByBoardId = async (boardId) => {
  const tasks = await tasksRepo.findAll();

  return tasks.filter((task) => task.boardId === boardId);
};

const getTask = (id) => tasksRepo.findById(id);

const createTask = async (
  boardId,
  { title, order, description },
  userId = null
) => {
  const newTask = new TaskModel({
    boardId,
    title,
    order,
    description,
    userId,
  });

  tasksRepo.insert(newTask);

  return newTask;
};

module.exports = { getTasksByBoardId, getTask, createTask };

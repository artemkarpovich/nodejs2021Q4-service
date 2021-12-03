const tasksRepo = require('./task.memory.repository');
const TaskModel = require('./task.model');

const getTasksByBoardId = async (boardId) => {
  const tasks = await tasksRepo.findAll();

  return tasks.filter((task) => task.boardId === boardId);
};

const getTaskByBoardId = async (boardId, taskId) => {
  const tasks = await tasksRepo.findAll();

  return tasks.find((task) => task.id === taskId && task.boardId === boardId);
};

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

const updateTask = (boardId, taskId) => tasksRepo.update(taskId);

const deleteTask = (boardId, taskId) => tasksRepo.removeById(taskId);

module.exports = {
  getTasksByBoardId,
  getTaskByBoardId,
  createTask,
  deleteTask,
  updateTask,
};

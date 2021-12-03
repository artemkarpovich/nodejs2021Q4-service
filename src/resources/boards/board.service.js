const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');
const BoardModel = require('./board.model');

const getAll = () => boardsRepo.findAll();

const getBoard = (id) => boardsRepo.findById(id);

const createBoard = (board) => {
  const newBoard = new BoardModel(board);
  boardsRepo.insert(newBoard);

  return newBoard;
};

const updateBoard = (board) => boardsRepo.update(board);

const deleteBoard = async (id) => {
  const result = await boardsRepo.removeById(id);
  await tasksRepo.deleteMany(id);

  return result;
};

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };

const boardsRepo = require('./board.memory.repository');
const BoardModel = require('./board.model');

const getAll = () => boardsRepo.findAll();

const getBoard = (id) => boardsRepo.findById(id);

const createBoard = (board) => {
  const newBoard = new BoardModel(board);
  boardsRepo.insert(newBoard);

  return newBoard;
};

const updateBoard = (board) => boardsRepo.update(board);

const deleteBoard = (id) => boardsRepo.removeById(id);

module.exports = { getAll, getBoard, createBoard, updateBoard, deleteBoard };

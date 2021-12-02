const boardsRepo = require('./board.memory.repository');
const BoardModel = require('./board.model');

const getAll = () => boardsRepo.findAll();

const createBoard = (board) => {
  const newBoard = new BoardModel(board);
  boardsRepo.insert(newBoard);

  return newBoard;
};

module.exports = { getAll, createBoard };

const boardsService = require('./board.service');
const { STATUS_CODES } = require('../../common/config');

async function getBoards(req, reply) {
  const boards = await boardsService.getAll();

  reply.send(boards);
}

async function createBoard(req, reply) {
  const { title, columns } = req.body;

  const newUser = boardsService.createBoard({ title, columns });

  reply.status(STATUS_CODES.CREATED).send(newUser);
}

module.exports = {
  getBoards,
  createBoard,
};

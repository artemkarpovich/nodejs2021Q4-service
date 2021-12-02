const boardsService = require('./board.service');

async function getBoards(req, reply) {
  const boards = await boardsService.getAll();

  reply.send(boards);
}

module.exports = {
  getBoards,
};

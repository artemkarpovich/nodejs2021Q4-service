const boardsService = require('./board.service');
const { STATUS_CODES } = require('../../common/config');

async function getBoards(req, reply) {
  const boards = await boardsService.getAll();

  reply.send(boards);
}

async function getBoard(req, reply) {
  const { boardId } = req.params;
  const board = await boardsService.getBoard(boardId);

  if (!board) {
    reply.status(STATUS_CODES.NOT_FOUND).send({
      message: `Board with ${boardId} ins't found`,
      error: 'NOT_FOUND',
    });
  }

  reply.send(board);
}

async function createBoard(req, reply) {
  const { title, columns } = req.body;

  const newUser = boardsService.createBoard({ title, columns });

  reply.status(STATUS_CODES.CREATED).send(newUser);
}

async function updateBoard(req, reply) {
  const { boardId } = req.params;
  const { title, columns } = req.body;

  const updatedBoard = await boardsService.updateBoard({
    id: boardId,
    title,
    columns,
  });

  if (!updatedBoard) {
    reply.status(STATUS_CODES.NOT_FOUND).send({
      message: `Board with ${boardId} ins't found`,
      error: 'NOT_FOUND',
    });
  }

  reply.status(STATUS_CODES.OK).send(updatedBoard);
}

async function deleteBoard(req, reply) {
  const { boardId } = req.params;

  const result = await boardsService.deleteBoard(boardId);

  if (!result) {
    reply.status(STATUS_CODES.NOT_FOUND).send({
      message: `Board with ${boardId} ins't found`,
      error: 'NOT_FOUND',
    });
  }

  reply.send({ ok: result });
}

module.exports = {
  getBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};

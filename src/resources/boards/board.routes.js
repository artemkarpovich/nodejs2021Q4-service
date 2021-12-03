const {
  getBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
} = require('./board.controller');
const {
  getBoardsSchema,
  createBoardSchema,
  getBoardSchema,
  updateBoardSchema,
  deleteBoardSchema,
} = require('./board.schema');

const getBoardsOpts = {
  schema: getBoardsSchema,
  handler: getBoards,
};

const getBoardOpts = {
  schema: getBoardSchema,
  handler: getBoard,
};

const postBoardOpts = {
  schema: createBoardSchema,
  handler: createBoard,
};

const updateBoardOpts = {
  schema: updateBoardSchema,
  handler: updateBoard,
};

const deleteBoardOpts = {
  schema: deleteBoardSchema,
  handler: deleteBoard,
};

function routes(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  fastify.put('/boards/:boardId', updateBoardOpts);
  fastify.delete('/boards/:boardId', deleteBoardOpts);

  done();
}

module.exports = routes;

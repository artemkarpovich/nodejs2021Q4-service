const {
  getBoards,
  getBoard,
  createBoard,
  deleteBoard,
} = require('./board.controller');
const {
  getBoardsSchema,
  createBoardSchema,
  getBoardSchema,
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

const deleteBoardOpts = {
  schema: deleteBoardSchema,
  handler: deleteBoard,
};

function routes(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  fastify.post('/boards', postBoardOpts);
  fastify.delete('/boards/:boardId', deleteBoardOpts);

  done();
}

module.exports = routes;

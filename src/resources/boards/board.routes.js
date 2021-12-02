const { getBoards, createBoard } = require('./board.controller');
const { getBoardsSchema, createBoardSchema } = require('./board.schema');

const getBoardsOpts = {
  schema: getBoardsSchema,
  handler: getBoards,
};

const postBoardOpts = {
  schema: createBoardSchema,
  handler: createBoard,
};

function routes(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);
  fastify.post('/boards', postBoardOpts);

  done();
}

module.exports = routes;

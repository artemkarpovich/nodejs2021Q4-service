const { getBoards } = require('./board.controller');
const { getBoardsSchema } = require('./board.schema');

const getBoardsOpts = {
  schema: getBoardsSchema,
  handler: getBoards,
};

function routes(fastify, options, done) {
  fastify.get('/boards', getBoardsOpts);

  done();
}

module.exports = routes;

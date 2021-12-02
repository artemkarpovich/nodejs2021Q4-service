const { getUsersSchema } = require('./user.schema');
const { getUsers } = require('./user.controller');

const getItemsOpts = {
  schema: getUsersSchema,
  handler: getUsers,
};

function routes(fastify, options, done) {
  fastify.get('/users', getItemsOpts);

  done();
}

module.exports = routes;

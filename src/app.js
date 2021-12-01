const fastify = require('fastify')({
  logger: true,
});

const userRoutes = require('./resources/users/user.router');

fastify.register(userRoutes);

module.exports = fastify;

const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'competitor-api',
    },
  },
});

const userRoutes = require('./resources/users/user.routes');

fastify.register(userRoutes);

module.exports = fastify;

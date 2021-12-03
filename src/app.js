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
const boardRoutes = require('./resources/boards/board.routes');
const taskRoutes = require('./resources/tasks/task.routes');

fastify.register(userRoutes);
fastify.register(boardRoutes);
fastify.register(taskRoutes);

module.exports = fastify;

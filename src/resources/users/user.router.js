const usersService = require('./user.service');

function userRoutes(fastify, options, done) {
  fastify.get('/users', async (req, reply) => {
    const users = await usersService.getAll();

    reply.send(users);
  });

  done();
}

module.exports = userRoutes;

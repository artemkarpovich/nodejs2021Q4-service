const usersService = require('./user.service');

async function getUsers(req, reply) {
  const users = await usersService.getAll();

  reply.send(users);
}

module.exports = { getUsers };

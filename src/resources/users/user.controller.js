const usersService = require('./user.service');
const { STATUS_CODES } = require('../../common/config');

async function getUsers(req, reply) {
  const users = await usersService.getAll();

  reply.send(users);
}

async function getUser(req, reply) {
  const { userId } = req.params;
  const user = await usersService.getUser(userId);

  if (!user) {
    reply.status(STATUS_CODES.NOT_FOUND).send({
      message: `User with ${userId} ins't found`,
      error: 'NOT_FOUND',
    });
  }

  reply.send(user);
}

async function createUser(req, reply) {
  const { name, password, login } = req.body;

  const newUser = usersService.createUser({ name, password, login });

  reply.status(STATUS_CODES.CREATED).send(newUser);
}

async function updateUser(req, reply) {
  const { userId } = req.params;
  const { name, password, login } = req.body;

  const updatedUser = await usersService.updateUser({
    id: userId,
    name,
    password,
    login,
  });

  if (!updatedUser) {
    reply.status(STATUS_CODES.NOT_FOUND).send({
      message: `User with ${userId} ins't found`,
      error: 'NOT_FOUND',
    });
  }

  reply.status(STATUS_CODES.OK).send(updatedUser);
}

async function deleteUser(req, reply) {
  const { userId } = req.params;

  const result = await usersService.deleteUser(userId);

  if (!result) {
    reply.status(STATUS_CODES.NOT_FOUND).send({
      message: `User with ${userId} ins't found`,
      error: 'NOT_FOUND',
    });
  }

  reply.send({ ok: result });
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };

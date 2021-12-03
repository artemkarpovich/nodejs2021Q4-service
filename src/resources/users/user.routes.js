const {
  getUsersSchema,
  getUserSchema,
  createUserSchema,
  updateUserSchema,
  deleteUserSchema,
} = require('./user.schema');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.controller');

const getUsersOpts = {
  schema: getUsersSchema,
  handler: getUsers,
};

const getUserOpts = {
  schema: getUserSchema,
  handler: getUser,
};

const postUsersOpts = {
  schema: createUserSchema,
  handler: createUser,
};

const updateUsersOpts = {
  schema: updateUserSchema,
  handler: updateUser,
};

const deleteUserOpts = {
  schema: deleteUserSchema,
  handler: deleteUser,
};

function routes(fastify, options, done) {
  fastify.get('/users', getUsersOpts);
  fastify.get('/users/:userId', getUserOpts);
  fastify.post('/users', postUsersOpts);
  fastify.put('/users/:userId', updateUsersOpts);
  fastify.delete('/users/:userId', deleteUserOpts);

  done();
}

module.exports = routes;

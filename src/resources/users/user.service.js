const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');
const UserModel = require('./user.model');

const getAll = () => usersRepo.findAll();

const getUser = (id) => usersRepo.findById(id);

const createUser = (user) => {
  const newUser = new UserModel(user);
  usersRepo.insert(newUser);

  return UserModel.toResponse(newUser);
};

const updateUser = (user) => usersRepo.update(user);

const deleteUser = async (userId) => {
  const result = await usersRepo.removeById(userId);
  await tasksRepo.updateMany(userId);

  return result;
};

module.exports = { getAll, getUser, createUser, updateUser, deleteUser };

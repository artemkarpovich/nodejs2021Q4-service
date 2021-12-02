const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.findAll();

module.exports = { getAll };

const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.findAll();

module.exports = { getAll };

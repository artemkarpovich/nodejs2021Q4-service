const {
  getTasksSchema,
  createTaskSchema,
  getTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
} = require('./task.schema');
const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require('./task.controller');

const getTasksOpts = {
  schema: getTasksSchema,
  handler: getTasks,
};

const getTaskOpts = {
  schema: getTaskSchema,
  handler: getTask,
};

const postTaskOpts = {
  schema: createTaskSchema,
  handler: createTask,
};

const deleteTaskOpts = {
  schema: deleteTaskSchema,
  handler: deleteTask,
};

const putTaskOpts = {
  schema: updateTaskSchema,
  handler: updateTask,
};

function routes(fastify, options, done) {
  fastify.get('/boards/:boardId/tasks', getTasksOpts);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskOpts);
  fastify.post('/boards/:boardId/tasks', postTaskOpts);
  fastify.put('/boards/:boardId/tasks/:taskId', putTaskOpts);
  fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpts);

  done();
}

module.exports = routes;

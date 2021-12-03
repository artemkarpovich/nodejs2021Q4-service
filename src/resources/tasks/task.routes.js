const {
  getTasksSchema,
  createTaskSchema,
  getTaskSchema,
} = require('./task.schema');
const { getTasks, createTask, getTask } = require('./task.controller');

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

function routes(fastify, options, done) {
  fastify.get('/boards/:boardId/tasks', getTasksOpts);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskOpts);
  fastify.post('/boards/:boardId/tasks', postTaskOpts);

  done();
}

module.exports = routes;

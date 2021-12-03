const { getTasksSchema, createTaskSchema } = require('./task.schema');
const { getTasks, createTask } = require('./task.controller');

const getTasksOpts = {
  schema: getTasksSchema,
  handler: getTasks,
};

const postTaskOpts = {
  schema: createTaskSchema,
  handler: createTask,
};

function routes(fastify, options, done) {
  fastify.get('/boards/:boardId/tasks', getTasksOpts);
  fastify.post('/boards/:boardId/tasks', postTaskOpts);

  done();
}

module.exports = routes;

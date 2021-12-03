const { STATUS_CODES } = require('../../common/config');

const TASK = {
  id: { type: 'string' },
  title: { type: 'string' },
  order: { type: 'number' },
  description: { type: 'string' },
  userId: { type: 'string', nullable: true },
  boardId: { type: 'string' },
  columnId: { type: 'string', nullable: true },
};

const getTasksSchema = {
  response: {
    [STATUS_CODES.OK]: {
      type: 'array',
      items: {
        type: 'object',
        properties: TASK,
      },
    },
  },
};

const getTaskSchema = {
  response: {
    [STATUS_CODES.OK]: {
      type: 'object',
      properties: TASK,
    },
  },
};

const createTaskSchema = {
  body: {
    type: 'object',
    required: ['title', 'order', 'description'],
    properties: {
      title: { type: 'string', minLength: 3 },
      order: { type: 'number' },
      description: { type: 'string', minLength: 3 },
    },
  },
  response: {
    [STATUS_CODES.CREATED]: {
      type: 'object',
      properties: TASK,
    },
  },
};

const updateTaskSchema = {
  body: {
    type: 'object',
    required: ['title', 'description', 'order'],
    properties: {
      title: { type: 'string', minLength: 3 },
      description: { type: 'string', minLength: 3 },
      order: { type: 'number' },
    },
  },
  response: {
    [STATUS_CODES.OK]: {
      type: 'object',
      properties: TASK,
    },
  },
};

const deleteTaskSchema = {
  response: {
    [STATUS_CODES.OK]: {
      type: 'object',
      properties: {
        ok: {
          type: 'boolean',
        },
      },
    },
  },
};

module.exports = {
  getTasksSchema,
  getTaskSchema,
  createTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
};

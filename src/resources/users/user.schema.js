const { STATUS_CODES } = require('../../common/config');

const USER = {
  id: { type: 'string' },
  name: { type: 'string' },
  login: { type: 'string' },
};

const getUsersSchema = {
  response: {
    [STATUS_CODES.OK]: {
      type: 'array',
      items: {
        type: 'object',
        properties: USER,
      },
    },
  },
};

const getUserSchema = {
  response: {
    [STATUS_CODES.OK]: {
      type: 'object',
      properties: USER,
    },
  },
};

const createUserSchema = {
  body: {
    type: 'object',
    required: ['name', 'password', 'login'],
    properties: {
      name: { type: 'string', minLength: 3 },
      password: { type: 'string', minLength: 8 },
      login: { type: 'string', minLength: 3 },
    },
  },
  response: {
    [STATUS_CODES.CREATED]: {
      type: 'object',
      properties: USER,
    },
  },
};

const updateUserSchema = {
  body: {
    type: 'object',
    required: ['name', 'password', 'login'],
    properties: {
      name: { type: 'string', minLength: 3 },
      password: { type: 'string', minLength: 8 },
      login: { type: 'string', minLength: 3 },
    },
  },
  response: {
    [STATUS_CODES.OK]: {
      type: 'object',
      properties: USER,
    },
  },
};

const deleteUserSchema = {
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
  getUsersSchema,
  getUserSchema,
  createUserSchema,
  updateUserSchema,
  deleteUserSchema,
};

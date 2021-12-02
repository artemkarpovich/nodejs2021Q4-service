const { STATUS_CODES } = require('../../common/config');

const getUsersSchema = {
  response: {
    [STATUS_CODES.OK]: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          login: { type: 'string' },
        },
      },
    },
  },
};

module.exports = {
  getUsersSchema,
};

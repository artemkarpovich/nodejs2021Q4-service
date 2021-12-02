const { STATUS_CODES } = require('../../common/config');

const COLUMN = {
  id: { type: 'string' },
  title: { title: 'string' },
  order: { title: 'number' },
};

const BOARD = {
  id: { type: 'string' },
  title: { type: 'string' },
  columns: { type: 'array', items: { type: 'object', properties: COLUMN } },
};

const getBoardsSchema = {
  response: {
    [STATUS_CODES.OK]: {
      type: 'array',
      items: {
        type: 'object',
        properties: BOARD,
      },
    },
  },
};

module.exports = { getBoardsSchema };

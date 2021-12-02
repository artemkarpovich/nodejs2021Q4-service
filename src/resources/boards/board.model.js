const { v4 } = require('uuid');

class Board {
  constructor({ id = v4(), title = 'default title', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((column) => ({ id: v4(), ...column }));
  }
}

module.exports = Board;

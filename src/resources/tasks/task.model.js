const { v4 } = require('uuid');

class Task {
  constructor({
    id = v4(),
    title = 'default title',
    order = 0,
    description = '',
    userId = null,
    boardId,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;

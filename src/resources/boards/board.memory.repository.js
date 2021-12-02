const boardsDb = new Map();

async function findById(id) {
  return boardsDb.get(id);
}

async function insert(board) {
  return boardsDb.set(board.id, board);
}

async function findAll() {
  return Array.from(boardsDb.values());
}

async function removeById(id) {
  return boardsDb.delete(id);
}

async function update(updatedBoard) {
  if (!boardsDb.has(updatedBoard.id)) {
    return false;
  }

  boardsDb.set(updatedBoard.id, {
    ...boardsDb.get(updatedBoard.id),
    ...updatedBoard,
  });

  return boardsDb.get(updatedBoard.id);
}

module.exports = { findById, insert, findAll, removeById, update };

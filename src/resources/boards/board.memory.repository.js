const boardsDb = new Map();

boardsDb.set('f31c3dfa-b88e-4cd0-9940-015408801654', {
  id: 'f31c3dfa-b88e-4cd0-9940-015408801654',
  title: 'yellow-square',
  columns: [
    {
      id: 'ae130a32-9d9a-478f-bad1-ad1fc0e8ae49',
      title: 'todo',
      order: 0,
    },
    {
      id: 'dd1491f4-1dd1-413e-977b-c1b0d13e5067',
      title: 'in review',
      order: 1,
    },
  ],
});

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

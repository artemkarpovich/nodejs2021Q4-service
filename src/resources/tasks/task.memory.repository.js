const tasksDb = new Map();

async function findById(id) {
  return tasksDb.get(id);
}

async function insert(board) {
  return tasksDb.set(board.id, board);
}

async function findAll() {
  return Array.from(tasksDb.values());
}

async function removeById(id) {
  return tasksDb.delete(id);
}

async function update(updatedBoard) {
  if (!tasksDb.has(updatedBoard.id)) {
    return false;
  }

  tasksDb.set(updatedBoard.id, {
    ...tasksDb.get(updatedBoard.id),
    ...updatedBoard,
  });

  return tasksDb.get(updatedBoard.id);
}

async function deleteManyByBoardId(boardId) {
  const tasks = await findAll();

  tasks
    .filter((task) => task.boardId === boardId)
    .forEach((task) => removeById(task.id));
}

module.exports = {
  findById,
  insert,
  findAll,
  removeById,
  update,
  deleteManyByBoardId,
};

const userDb = new Map();

async function findById(id) {
  return userDb.get(id);
}

async function insert(user) {
  return userDb.set(user.id, user);
}

async function findAll() {
  return Array.from(userDb.values());
}

async function removeById(id) {
  return userDb.delete(id);
}

async function update(updatedUser) {
  if (!userDb.has(updatedUser.id)) throw new Error('user not found');
  return userDb.set(updatedUser.id, {
    ...userDb.get(updatedUser.id),
    ...updatedUser,
  });
}

module.exports = { findById, insert, findAll, removeById, update };

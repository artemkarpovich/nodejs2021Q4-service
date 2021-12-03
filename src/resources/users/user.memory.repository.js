const userDb = new Map();

userDb.set('8ea2117c-4815-423f-b73c-ae38296155a3', {
  id: '8ea2117c-4815-423f-b73c-ae38296155a3',
  name: 'Vasya',
  login: 'bla',
  password: 'pass',
});

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
  if (!userDb.has(updatedUser.id)) {
    return false;
  }

  userDb.set(updatedUser.id, {
    ...userDb.get(updatedUser.id),
    ...updatedUser,
  });

  return userDb.get(updatedUser.id);
}

module.exports = { findById, insert, findAll, removeById, update };

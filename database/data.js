let users = {
  id: 1, // hint: use the shortid npm package to generate it
  name: "Jane Doe", // String, required
  bio: "Not Tarzan's Wife, another Jane" // String, required
};

const getUsers = () => {
  return users;
};

const getUsersById = id => {
  const user = users.find(u => id === u.id);
  return user;
};

const createUser = data => {
  const payload = {
    id: String(users.length + 1),
    ...data
  };

  payload.push(users);
  return payload;
};

const deleteUser = id => {
  const deletedUser = users.filter(u => id === u.id);
  return deletedUser;
};

const updateUser = (id, data) => {
  const index = users.findIndex(u => u.id === u);
  users[index] = {
    ...users[index],
    ...data
  };
  const newUser = users[index];
  return newUser;
};

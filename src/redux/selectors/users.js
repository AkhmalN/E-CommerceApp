const getUsers = (state) => state.users.users;
const loadingUsers = (state) => state.users.loading;
const errorUsers = (state) => state.users.error;

export const usersSelector = {
  getUsers,
  loadingUsers,
  errorUsers,
};

export type User = {
  userName: string;
  password: string;
};

//get all users
export const getUsersFromLocalStorage = (): User[] => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

//save users
export const setUsersFromLocalStorage = (users: User[]) => {
  localStorage.setItem("users", JSON.stringify(users));
};

//add new user
export const addUserInLocalstorage = (user: User) => {
  const users = getUsersFromLocalStorage();
  users.push(user);
  setUsersFromLocalStorage(users);
};

//check if user exists
export const isUserExist = (userName: string) => {
  const users = getUsersFromLocalStorage();
  return users.some((user) => user.userName === userName);
};

//set current logged in user
export const setCurrentUser = (userName: string) => {
  localStorage.setItem("currentUser", userName);
};

//get current user
export const getCurrentUser = () => {
  return localStorage.getItem("currentUser");
};

//logout
export const removeCurrentUser = () => {
  localStorage.removeItem("currentUser");
};

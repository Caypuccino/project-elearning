import { UserData } from '../models/user-model';
const userData = require('../data/users');

const getUsers = (): UserData[] => {
  return userData || [];
};

const addUser = (user: UserData) => {
  userData.push(user);
  return user;
};

export default {
  getUsers,
  addUser
};
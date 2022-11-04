const { UserModel } = require('../database/models/user');

const userService = {
  createUser: async (data) => {
    const user = await UserModel.create(data);
    return user;
  }
}

module.exports = userService;
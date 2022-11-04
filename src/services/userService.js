const models = require('../database/models');

const userService = {
  createUser: async (data) => {
    const user = await models.User.create(data);
    return user;
  },

  getAll: async () => {
    const users = await models.User.findAll();
    return users;
  }
}

module.exports = userService;
const models = require('../database/models');

const userService = {
  createUser: async (data) => {
    const user = await models.User.create(data);
    return user;
  }
}

module.exports = userService;
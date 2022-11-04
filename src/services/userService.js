const models = require('../database/models');
const jwtService = require('../middlewares/jwt.service');

const userService = {
  create: async (data) => {
    const newUser = await models.User.create(data);
    const { email } = newUser.dataValues;
    const token = jwtService.createToken(email);
    return token;
  },

  getAll: async () => {
    const users = await models.User.findAll();
    return users;
  },

  getOne: async (id) => {
    const user = await models.User.findOne({ where: { id } });
    return user;
  }
}

module.exports = userService;
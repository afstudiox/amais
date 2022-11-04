const { User } = require('../database/models');
const jwtService = require('../middlewares/jwt.service');

const userService = {
  create: async (data) => {
    const user = await User.create(data);
    const { email } = user.dataValues;
    const token = jwtService.createToken(email);
    return token;
  },

  getAll: async () => {
    const users = await User.findAll();
    return users;
  },

  getOne: async (id) => {
    const user = await User.findOne({ where: { id } });
    return user;
  },

  change: async (id, body) => {
    await User.update(body , { where: { id } });
    const user = await userService.getOne(id); 
    return user;
  }
  
}

module.exports = userService;
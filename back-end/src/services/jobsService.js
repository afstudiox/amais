const { User } = require('../database/models');

const jobsService = {
  login: async (login, senha) => {
    const user = await User.findOne({ where: { login } });
    if (!user || user.senha !== senha) {
      return { message: 'Credenciais Inválidas' };
    }
    return user;
  },
  
  create: async (data) => {
    const user = await User.create(data);
    const { login } = user.dataValues;
    return login; 
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
    const user = await jobsService.getOne(id); 
    return user;
  }
  
}

module.exports = jobsService;
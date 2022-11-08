const { User } = require('../database/models');
const { StatusCodes } = require('http-status-codes');

const jobsService = {
  login: async (login, senha) => {
    const user = await User.findOne({ where: { login } });
    if (!user || user.senha !== senha) {
      return { message: 'Credenciais Inválidas' };
    }
    return user;
  },

  userExists: async (login) => {
    const checkUser = await User.findOne({ where: { login } });
    if (checkUser) {
      const error = new Error('Usuário já existe');
      error.code = StatusCodes.CONFLICT;
      throw error;
    };
    return true;
  },
  
  create: async (data) => {
    const user = await User.create(data);
    const { login } = user.dataValues;
    return login; 
  },
  
  read: async () => {
    const users = await User.findAll();
    return users;
  },

  readOne: async (id) => {
    const user = await User.findOne({ where: { id } });
    return user;
  },

  update: async (id, body) => {
    await User.update(body , { where: { id } });
    const user = await jobsService.readOne(id); 
    return user;
  }
  
}

module.exports = jobsService;
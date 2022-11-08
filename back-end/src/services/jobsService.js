const { User } = require('../database/models');
const md5 = require('md5');
const { StatusCodes } = require('http-status-codes');
const jwtService = require('../middlewares/jwt.service'); //

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
  
  create: async ({ senha, ...data }) => {
    const senhaHash = md5(senha);
    const user = await User.create({...data, senha: senhaHash});
    const { login, senha: except, ...userSemSenha } = user.dataValues;
    const token = jwtService.createToken(login);
    return {token, user: userSemSenha};
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
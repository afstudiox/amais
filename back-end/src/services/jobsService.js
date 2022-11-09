const { User } = require('../database/models');
const md5 = require('md5');
const { StatusCodes } = require('http-status-codes');
const jwtService = require('../middlewares/jwt.service'); //

const jobsService = {
  login: async (body) => {
    const senhaHash = md5(body.senha);
    const user = await User.findOne({ where: { login: body.login } });
    if (!user || user.senha !== senhaHash) {
      const error = new Error('Login ou senha inválidos');
      error.code = StatusCodes.UNAUTHORIZED;
      throw error;
    }
    const { login, id } = user.dataValues;
    const token = jwtService.createToken(id);
    return { id, login, token };
  },

  validateToken: async (token) => {
    if(!token) {
      const error = new Error('Token não encontrado');
      error.code = StatusCodes.NOT_FOUND;
      throw error;
    }
    const data = jwtService.verifyToken(token);
    return data;
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
    const { id, nome, senha: except, ...userSemSenha } = user.dataValues;
    const token = jwtService.createToken(id);
    return {token, id, ...userSemSenha};
  },
  
  read: async () => {
    const users = await User.findAll();
    return users;
  },

  readOne: async (id) => {
    const user = await User.findOne({ where: { id } });
    const { senha, ...userSemSenha } = user.dataValues;
    return userSemSenha;
  },

  update: async (id, body) => {
    const senhaHash = md5(body.senha);
    const bodyWithSenhaHash = {...body, senha: senhaHash};
    await User.update(bodyWithSenhaHash , { where: { id } });
    const user = await jobsService.readOne(id); 
    return user;
  }
  
}

module.exports = jobsService;
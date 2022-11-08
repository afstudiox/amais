const jobsService = require('../services/jobsService');
const { StatusCodes } = require('http-status-codes');

const jobsController = {
  login: async (req, res) => {
    const { login, senha } = req.body;
    const user = await jobsService.login(login, senha);
    res.status(200).json(user);
  },
  
  create: async (req, res) => {
    const { body } = req;
    await jobsService.userExists(body.login);
    const newUser = await jobsService.create(body);
    res.status(StatusCodes.CREATED).json(newUser);
  },

  read: async (req, res) => {
    const users = await jobsService.read();
    res.status(200).json(users);
  },

  readOne: async (req, res) => {
    const { id } = req.params;
    const user = await jobsService.readOne(id);
    res.status(200).json(user);
  }, 

  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const user = await jobsService.update(id, body);
    res.status(200).json(user);
  }
}

module.exports = jobsController;
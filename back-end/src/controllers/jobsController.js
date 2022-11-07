const jobsService = require('../services/jobsService');

const jobsController = {
  login: async (req, res) => {
    const { login, senha } = req.body;
    const user = await jobsService.login(login, senha);
    console.log(user);
    res.status(200).json(user);
  },
  

  create: async (req, res) => {
    const { body } = req;
    const newUser = await jobsService.create(body);
    res.status(201).json(newUser);
  },

  getAll: async (req, res) => {
    const users = await jobsService.getAll();
    res.status(200).json(users);
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    const user = await jobsService.getOne(id);
    res.status(200).json(user);
  }, 

  change: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const user = await jobsService.change(id, body);
    res.status(200).json(user);
  }
}

module.exports = jobsController;
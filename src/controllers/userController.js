const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const { body } = req;
    const token = await userService.create(body);
    res.status(201).json({token});
  },

  getAll: async (req, res) => {
    const users = await userService.getAll();
    res.status(200).json(users);
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getOne(id);
    res.status(200).json(user);
  }, 

  change: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const user = await userService.change(id, body);
    res.status(200).json(user);
  }
}

module.exports = userController;
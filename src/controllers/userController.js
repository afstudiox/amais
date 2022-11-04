const userService = require('../services/userService');

const userController = {
  createUser: async (req, res) => {
    const { body } = req;
    const user = await userService.createUser(body);
    res.status(201).json(user);
  }
}

module.exports = userController;
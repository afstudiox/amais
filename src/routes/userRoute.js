const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.get('/:id', userController.getOne);
userRouter.get('/', userController.getAll);

module.exports = userRouter;
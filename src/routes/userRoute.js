const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.getAll);
userRouter.put('/:id', userController.change);
userRouter.get('/:id', userController.getOne);

module.exports = userRouter;
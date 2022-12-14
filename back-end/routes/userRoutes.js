const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

//get all users info and create user info
userRouter
  .route('/')
  .get(userController.getUsers)
  .post(userController.createUser);

//get all users info and create user info
userRouter
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.createUser)
  .delete(userController.deleteUser);

module.exports = userRouter;

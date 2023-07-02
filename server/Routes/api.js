//requiring in express
const express = require('express');
const path = require('path');
//requiring in taskController from the controllers folder.
const taskController = require(path.resolve(
  __dirname,
  '../controllers/taskController'
));
//requiring in the express router.
const taskRouter = express.Router();

//ALL GET POST PATCH AND DELETE REQUESTS MADE HERE

taskRouter.get('/', taskController.getTasks, (req, res) => {
  //get and serve tasks
  //passing in res.locals.tasks, that is defined in our getTasks middleware
  return res.status(200).json(res.locals.test);
});

taskRouter.post('/', taskController.createTask, (req, res) => {
  //post a new task
  //passing in res.locals.task that gets assigned in our createTask middleware.
  return res.status(200).json(res.locals.taskCreated);
});

// //patch request from given endpoint, to controller logic
// // localhost:3000/task/mowtheLown
// taskRouter.patch('/:task', taskController.assignTask, (req, res) => {
//   //assign task to user
//   //stored data in res obj in locals obj key made in MW, res.locals comes from middleware
//   return res.status(200).json(res.locals.task);
// });

// taskRouter.patch('/:task', taskController.updateTask, (req, res) => {
//   //update given task
//   //store data from mw into the res.locals obj under assigned key from mw
//   return res.status(200).json(res.locals.task);
// });

// taskRouter.delete('/:task', taskController.deleteTask, (req, res) => {
//   //delete the task
//   //return status code (needs to be res.sendStatus if ALL we are sending is the status)
//   return res.status(200).json('deleted the task');
// });

// // localhost:3000/task/mowtheLown
// // localhost:3000/task/updateTasl/dothedishes

module.exports = taskRouter;

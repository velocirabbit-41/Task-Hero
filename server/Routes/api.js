//requiring in express
const express = require('express');
//requiring in taskController from the controllers folder.
const taskController = require('../controllers/taskController');
//requiring in the express router.
const taskRouter = express.Router();

//ALL GET POST PATCH AND DELETE REQUESTS MADE HERE

taskRouter.get('/', taskController.getTasks, (req, res) => {
  //get and serve tasks
  //passing in res.locals.tasks, that is defined in our getTasks middleware
  res.status(200).json(res.locals.tasks);
});

//[atch
taskRouter.patch(':/takeTask', taskController.takeTasks, (req, res) => {});

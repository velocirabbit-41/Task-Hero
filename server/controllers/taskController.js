//requiring in database from taskModels file
//can use db within controllers to query
const path = require('path');
const db = require(path.resolve(__dirname, '../models/taskModels.js'));
const env = require('dotenv').config();
//declare an empty obj to call methods on
const taskController = {
  getTasks: (req, res, next) => {
    //define query
    const queryText = 'SELECT * FROM tasks';
    db.query(queryText)
      .then((data) => {
        console.log('data', data);
        res.locals.test = data.rows;
        return next();
      })
      .catch((error) => {
        const mwError = {
          log: 'error in the taskController.getTasks middleware function',
          status: 400,
          message: { error: 'was not able to acquire task', error },
        };
        return next(mwError);
      });
  },
};

taskController.createTask = (req, res, next) => {};

taskController.assignTask;

taskController.deleteTask;

module.exports = taskController;

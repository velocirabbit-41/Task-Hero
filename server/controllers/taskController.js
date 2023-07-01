//requiring in database from taskModels file
//can use db within controllers to query
const path = require('path');
const db = require(path.resolve(__dirname, '../models/taskModels.js'));
//declare an empty obj to call methods on
const taskController = {
  getTasks: (req, res, next) => {
    //define query
    const queryText = 'select * from tasks';
    db.query(queryText)
      .then((data) => {
        res.locals = data;
        return next();
      })
      .catch((err) => {
        const mwError = {
          log: 'error in the taskController.getTasks middleware function',
          status: 400,
          message: { error: 'was not able to acquire task' },
        };
        return next(mwError);
      });
  },
};

// taskController.createTask = (req, res, next) => {};

// taskController.assignTask;

// taskController.deleteTask;

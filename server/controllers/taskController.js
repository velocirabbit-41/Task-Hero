//requiring in database from taskModels file
//can use db within controllers to query
const path = require('path');
const db = require(path.resolve(__dirname, '../models/taskModels.js'));
const env = require('dotenv').config();

//declare an empty obj to call methods on
const taskController = {
  // CRUD: Read
  getTasks: (req, res, next) => {
    //define query
    const queryText = 'SELECT * FROM tasks';
    db.query(queryText)
      .then((data) => {
        // console.log('data', data);
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

// CRUD: Create
taskController.createTask = (req, res, next) => {
  const queryText =
    'INSERT INTO tasks (created_by, status, task_content) VALUES ($1, $2, $3) RETURNING *;';
  const { creator, task, status } = req.body;
  // console.log('req.body', req.body);
  // console.log('creator', creator);
  // console.log('task', task);
  // console.log('status', status);
  //matches elems of arr with values order in arr due to query INSERT INTO ...dollar sign values refer to args passed in queryparams
  const queryParams = [creator, status, task];
  console.log('queryParams', queryParams);

  db.query(queryText, queryParams)
    .then((data) => {
      if (data) {
        console.log(data.rows);
        res.locals.taskCreated = data.rows;
        return next();
      }
    })
    .catch((error) => {
      const mwError = {
        log: 'error in the taskController.createTasks middleware function',
        status: 400,
        message: { error: 'was not able to create task in db', error },
      };
      return next(mwError);
    });
};


// taskController.changeStatus = (req, res, next) => {
//   const queryText = 'UPDATE tasks SET status=$1 WHERE task_id=$2;';
//   const { task, user, status, task_id } = req.body;
//   const queryParams = [status, task_id];
//   db.query(queryText, queryParams)
//     .then((data) => {
//       res.locals.statusChanged = data.rows;
//       return next();
//     })
//     .catch((error) => {
//       const mwError = {
//         log: 'error in the taskController.changeStatus middleware function',
//         status: 400,
//         message: { error: 'was not able to acquire task', error },
//       };
//       return next(mwError);
//     });
// };

// CRUD: Update
taskController.updateUserAndStatus = (req, res, next) => {
  const queryText =
    'UPDATE tasks SET status = $1, assigned_to = $2 WHERE task_id=$3 RETURNING *;';
  const { task_content, user, status, task_id } = req.body;
  console.log('req.body', req.body);
  const queryParams = [status, user, task_id];
  console.log('queryParams', queryParams);
  db.query(queryText, queryParams)
    .then((data) => {
      console.log('data', data);
      if (data) {
        res.locals.taskEdited = data.rows;
        return next();
      }
    })
    .catch((error) => {
      const mwError = {
        log: 'error in the taskController.editTask middleware function',
        status: 400,
        message: { error: 'was not able to edit task', error },
      };
      return next(mwError);
    });
};

// CRUD: Update
// taskController.assignTask = (req, res, next) => {
//   const queryText = 'UPDATE tasks SET assigned_to=$1 WHERE task_id=$2;';
//   const { task, user, status, task_id } = req.body;
//   const queryParams = [user, task_id];
//   db.query(queryText, queryParams)
//     .then((data) => {
//       console.log(data.rows);
//       res.locals.taskAssigned = data.rows;
//       return next();
//     })
//     .catch((error) => {
//       const mwError = {
//         log: 'error in the taskController.assignTask middleware function',
//         status: 400,
//         message: { error: 'was not able to acquire task', error },
//       };
//       return next(mwError);
//     });
// };
///onereducer update task send an obj with stuff already updated

// CRUD: Delete
taskController.deleteTask = (req, res, next) => {
  const queryText = 'DELETE FROM tasks WHERE task_id=$1 RETURNING *;';
  const { task, user, status, task_id } = req.body;
  const queryParams = [task_id];
  db.query(queryText, queryParams)
    .then((data) => {
      console.log(data.rows);
      res.locals.taskDeleted = data.rows;
      return next();
    })
    .catch((error) => {
      const mwError = {
        log: 'error in the taskController.deleteTask middleware function',
        status: 400,
        message: { error: 'was not able to delete task', error },
      };
      return next(mwError);
    });
};

module.exports = taskController;

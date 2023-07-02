const { Pool } = require('pg');
const path = require('path');
require('dotenv').config();

// create a new pool using connection from process.env
const pool = new Pool({
  connectionString: process.env.URL,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

// table_name = tasks

// CREATE TABLE tasks (
// 	task_id integer NOT NULL UNIQUE,
// 	created_by text NOT NULL,
// 	assigned_to text,
// 	status integer NOT NULL,
// 	task_content text NOT NULL
// )

/*
  =============
  Get Current Tasks
  =============

  const queryText = 'SELECT * FROM tasks'

  =============
  Create Task
  =============

  const queryText = 'INSERT INTO tasks (created_by, status, task_content) VALUES $1, $2, $3;';
  const { creator, task, status} = req.body;
  const queryParams = [creator, status, task];
  


  =============
  Assign Task
  =============

  // need to get task_id from frontEnd
  
  const queryText = 'UPDATE tasks SET assigned_to=$1 WHERE task_id=$2;';
  const { task, user, status, task_id } = req.body;
  const queryParams = [user, task_id];


  =============
  Change Status
  =============

  const queryText = 'UPDATE tasks SET status=$1 WHERE task_id=$2;';
  const { task, user, status, task_id } = req.body;
  const queryParams = [status, task_id]

  =============
  Edit Task
  =============

  const queryText = 'UPDATE tasks SET task_content=$1 WHERE task_id=$2;';

  =============
  Delete Task
  =============

  const queryText = 'DELETE FROM tasks WHERE task_id=$1;'
  const { task, user, status, task_id } = req.body;
  const queryParams = [task_id]
*/

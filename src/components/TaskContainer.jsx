import React from 'react';
//import children
import TaskCreator from './TaskCreator.jsx';
import TaskDisplay from './TaskDisplay.jsx';

const TaskContainer = (props) => {
  return (
    <div className='task-container'>
      this is the task container
      <TaskCreator />
      <TaskDisplay />
    </div>
  );
};

export default TaskContainer;

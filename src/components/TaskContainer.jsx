import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//import children
import TaskCreator from './TaskCreator.jsx';
import TaskDisplay from './TaskDisplay.jsx';

const TaskContainer = (props) => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className='task-container'>
        this is the task container
        <TaskCreator />
        <TaskDisplay />
      </div>
    )
  );
};

export default TaskContainer;

import React from 'react';
import store from '../store';

import UnassignedTask from './UnassignedTask.jsx';

const UnassignedTaskList = (props) => {
  const state = store.getState();

  const arrOfTasks = state.arrOfTasks;
  //loop through a state array to find all the unassigned tasks
  const unassignedComponents = [];
  arrOfTasks.forEach((task) => {
    if (!assigned_to) unassignedComponents.push(<UnassignedTask task={task} />);
  });

  return <div className='unassigned-tasks'>{unassignedComponents}</div>;
};

export default UnassignedTaskList;

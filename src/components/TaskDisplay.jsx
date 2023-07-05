import React from 'react';
import UserRows from './UserRows.jsx';
import Base from './Base.jsx';
import store from '../store';

const TaskDisplay = (props) => {
  //arr of components where each component is specific to one user,
  //and each component has a property for that user array of tasks

  // create rows for each user in userArray
  // const state = store.getState();

  // const userRows = [];
  // // use a for loop;
  // for (let user of state.usersList) {
  //     // get each task for each user
  //     // get it from assigned_to property
  //     const userSpecificTasks = [];

  //     state.arrOfTasks.forEach( task => {
  //         if (task.assigned_to === user) userSpecficTasks.push(task)
  //     })

  //     userRows.push(<UserRows name={user} tasks={userSpecificTasks} />)
  // }
  //entire array with an object for each task
  //filter thru that to make separate arrays for each user
  //render each separate user array?

  return (
    <div className='task-display'>
      <Base />
    </div>
  );
};

export default TaskDisplay;

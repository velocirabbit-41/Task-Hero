import React from 'react';
// import { useDispatch } from 'react-redux';
import * as actions from '../../actions/actions.js';
import store from '../../store.js';

const UnassignedTask = (props) => {
  //props.task is the task object

  //   const dispatch = useDispatch();

  const takeTask = () => {};

  return (
    <div className='task-item'>
      <p className='taskName'> Task: {prop.task.task} </p>
      <p className='createdBy'> Created by: {prop.task.creator}</p>
      <p className='assignedTo'> Assigned to: {prop.task.user}</p>
      <div className='buttons'>
        <button onClick={takeTask()}>Take</button>
      </div>
    </div>
  );
};

export default UnassignedTask;

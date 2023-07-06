import React from 'react';

const TaskCard = (props) => {
  const editCard = () => {};

  const markDone = () => {};

  return (
    <div className='task-card'>
      <p className='taskName'> Task: {props.taskName}</p>
      <p className='taskBody'> Created by: {props.createdBy}</p>
      <p className='taskBody'> Assigned to: {props.assigned}</p>
      <div className='buttons'>
        <div className='cardBtn' onClick={editCard}>
          Edit
        </div>
        <div className='cardBtn' onClick={markDone}>
          Mark Done
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

import React from 'react';

const TaskCard = (props) => {
  const editCard = () => {};

  const markDone = () => {};

  return (
    <div className='task-card'>
      <p className='taskName'> Task: {props.taskName}</p>
      <p className='createdBy'> Created by: {props.createdBy}</p>
      <p className='assignedTo'> Assigned to: {props.assigned}</p>
      <div className='buttons'>
        <button className='cardBtn' onClick={editCard}>
          Edit
        </button>
        <button className='cardBtn' onClick={markDone}>
          Mark Done
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

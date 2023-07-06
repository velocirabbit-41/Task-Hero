import React, { useEffect, useState } from 'react';

const taskOutline = {
  task_content: "",
  assigned_to: "",
  created_by: "" ,
  task_id: "",
  status: "",
};
// fetch reques / task
// delete

const TaskCard = (props) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskOutline)
  };
  fetch('http://localhost:3000/task/', requestOptions)
      .then(response => response.json())
      .then(data => setTaskList(console.log(data)));

  }, []);

  /*
      task_content
      assigned_to
      created_by
      task_id
      status
  */

  function editCard() {
      console.log('edit Card func called');
      // destructure
      // update state
      
      // print the card info
    }
    
    const markDone = () => {
      console.log('markDone called')
      // print the card info
  };

/* creator, user, task, status */
/* task_id, assigned_to, task, status */

const statusObj = {
  0 : "Unassigned", 
  1 : "ToDo/Assigned",
  2 : "In Progress",
  3 : "For Review",
  4 : "Completed"
};

  return (
    <div className='task-card'>
      <p className='taskName'> Task: {props.task_content}</p>
      <p className='taskBody'> Created by: {props.created_by}</p>
      <p className='taskBody'> Assigned to: {props.assigned_to}</p>
      <p className='taskBody'> Assigned to: {statusObj[props.status]}</p>
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

import React, { useEffect, useState } from 'react';

const taskOutline = {
  task_content: "",
  assigned_to: "",
  created_by: "" ,
  task_id: "",
  status: "",
};

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

  function editCard() {
      console.log('Edit Card button clicked');
      // incomplete: use this func to update SQL row
    }
    
  const markDone = (e) => {
    // e.target.id
    console.log('markDone called')
    console.log(props.task_id)
    fetch(`http://localhost:3000/task?id=${props.task_id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(props.task_id),
      // console.log('received')
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("task failed to delete");
      });
  };

/* creator, user, task, status */
/* task_id, assigned_to, task, status */

const statusObj = {
  0 : "Not started", 
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
      <p className='taskBody'> Status: {statusObj[props.status]}</p>
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

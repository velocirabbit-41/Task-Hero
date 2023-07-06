import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';

const TaskDisplay = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    console.log('use Effect')
    fetch('http://localhost:3000/task/')
        .then(response => response.json())
        // .then(data => console.log("hey, friend")setTaskList(data))
        .then(data => {
          console.log(data);
          console.log("hey, friend")
          setTaskList(data)
        })
        .catch(err => {
          return {
            log: 'error fetching task cards from TaskDisplay component',
            status: 400,
            message: { err: 'Unable to get list of tasks', err },
          }
        })

      }, []); 
 
  const allCards = [];

  taskList.forEach( el => console.log(el.task_id));

  taskList.forEach( el => {
    allCards.push(
      <TaskCard
      task_content={el.task_content}
      assigned_to={el.assigned_to}
      created_by={el.created_by}
      task_id={el.task_id}
      status={el.status}
      />
    )
  })
  console.log(allCards);


  //////////////////// FROM DAWIT ////////////////////////////    
  
    // fetch request http//localhost/3000/task
    // get request

    // useEffect((),[]) // use to update state on load

    // fetch (http; local/task) // make sure we have a header when we need it
    //   .then((dataReceved) => {
    //     console.log(dataReceved)
    //   })
    //   .catch(err => {
    //   })

  return (
    <div >
      <h3>All tasks</h3>
      <div className='task-display'>
        {allCards}
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskDisplay;
 
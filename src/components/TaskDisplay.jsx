import React, {useEffect, useState} from 'react';
import TaskCard from './TaskCard';

const TaskDisplay = () => {
  const [taskList, setTaskList] = useState([]);
  // const taskList = [];

  // access list of all tasks from DB, get an arr of objs
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await fetch('');
      const parseTask = await tasks.json();
      setTaskList(parseTask);
    } 
  }, []);

  const allCards = [];

  for (let i = 0; i < taskList.length; i++) {
    allCards.push(el => <TaskCard 
      taskName={taskList[i].taskName} 
      assigned={taskList[i].assigned} 
      createdBy={taskList[i].createdBy}  
      dueDate={taskList[i].dueDate}  
      project={taskList[i].project}  
      owner={taskList[i].owner}  
      />)
  }


    // turn this arr of objs into an array of divs 
      // each div is created in TaskCard and pushed into the taskList array


  // create the list of divs from taskList to be rendered
  return (
    <div className='task-display'>
      {allCards}
    </div>
  );
};

export default TaskDisplay;

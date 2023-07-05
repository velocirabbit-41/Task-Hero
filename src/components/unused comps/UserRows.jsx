import React from "react";
import TaskCard from "./TaskCard.jsx";

const UserRows = (prop) => {
  const { user, tasks } = prop;

  const toDoTasks = tasks.filter( task => task.status === 1)
  const inProgressTasks = tasks.filter( task => task.status === 2)
  const inReviewTasks = tasks.filter( task => task.status === 3)
  const completedTasks = tasks.filter( task => task.status === 4)
  
  const toDoComponents = [];
  toDoTasks.forEach(obj=>{
    toDoComponents.push(<TaskCard task={obj}/>)
  });

  const inProgressComponents = [];
  inProgressTasks.forEach((obj) => {
    inProgressComponents.push(<TaskCard task={obj}/>)
    
  });

  const inReviewComponents = [];
  inReviewTasks.forEach(obj=>{
    inReviewComponents.push(<TaskCard task={obj}/>)
  });
  
  const completedTaskComponents = [];
  completedTasks.forEach(obj=>{
    completedTaskComponents.push(<TaskCard task={obj}/>)
  });
  

  
  return (
    <div>
      <div className="toDoTasks">
        {toDoComponents}
      </div>

      <div className="inProgressTasks">
        {/* probably be array of task cards */}
        {inProgressComponents}
      </div>

      <div className="inReviewTasks">
        {/* probably be array of task cards */}
        {inReviewComponents}
      </div>

      <div className="CompletedTasks">
        {/* probably be array of task cards */}
        {completedTaskComponents}
      </div>
    </div>
  );
};

export default UserRows;

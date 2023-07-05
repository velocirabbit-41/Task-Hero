import React from 'react';



const TaskCreator = () => {
    return(
      <div className='task-creator'>
        <form>
          <label for="task">Task name</label> <br/>
          <input type="text" id="task"></input><br/>
          
          <label for="date">due date</label><br/>
          <input type="date" id="date"></input><br/>

          <label for="assigned">Assigned to</label><br/>
          <input type="text" id="assigned"></input><br/>
          
          <label for="owner">Project Owner</label><br/>
          <input type="text" id="owner"></input><br/>
          
          <label for="project">Project</label><br/>
          <input type="text" id="proj"></input><br/>
          
          <label for="other">Other, per SQL DB</label><br/>
          <input type="text" id="otherid"></input><br/>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  // note for new task submission: we need to confirm that the submit button is going to collect all the info from the form that we need to sent to SQL



  export default TaskCreator;

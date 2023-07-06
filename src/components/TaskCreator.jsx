import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { useAuth0 } from '@auth0/auth0-react';

const TaskCreator = (props) => {
  console.log('task creator test')

  const [data, setData] = useState({
    task : '',
    assignedTo : ''
  });

  const { user } = useAuth0();

  const sendToDB = (e) => {
    console.log('sendToDB ran');
    // e.preventDefault();
    // send info from the form to the DB on click 
    
    // collect info from form
    console.log(user.name)
    const userName = user.name;
    const taskObj = {};
    taskObj.creator = userName;
    taskObj.user = document.getElementById("assigned").value;
    taskObj.task = document.getElementById("task").value;
    taskObj.status = 0;
    console.log("taskObj",taskObj);

    fetch('http://localhost:3000/task/', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskObj),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("task failed to post");
      });
  }

  return(
    // <div className='task-creator'>
    <div >
      <h3>Create a new task</h3>
      <div className='task-creator'>


      {/* onSubmit="return false" */}
      <form >
          <div className="new-col">
            <label htmlFor="task">Task name</label> <br/><br/>
            {/* <label htmlFor="date">Due date</label> <br/> <br/> */}
            <label htmlFor="assigned">Assigned to</label> <br/><br/>
            {/* <label htmlFor="owner">Project Owner</label> <br/><br/> */}
          </div>

          <div className="new-col">
            <input type="text" id="task" value= {data.task} onChange={(e) => setData({...data, task: e.target.value})}></input><br/><br/>
            <input type="text" id="assigned" value={data.assignedTo} onChange = {(e) => setData({...data, assignedTo : e.target.value})}></input><br/><br/>
          </div>

          <div className="form-items">
            {/* <button type='submit' >Submit</button> */}
            {/* <input type="submit"  onSubmit={sendToDB} value="Submit" /> */}
          </div>
        </form>
        <button type="submit"  onClick={sendToDB}>a button here</button>
      </div>
    </div>
  );
}

  // note for new task submission: we need to confirm that the submit button is going to collect all the info from the form that we need to sent to SQL



export default TaskCreator;

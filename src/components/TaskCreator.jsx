import React from 'react';



const TaskCreator = () => {
  const sendToDB = () => {
    // send info from the form to the DB on click 
  }

    return(
      <div className='task-creator'>
        <h3>Create a new task</h3>
        <div className='task-creator'>

          <form>
            <div className="new-col">
              <label for="task">Task name</label> <br/><br/>
              <label for="date">Due date</label> <br/> <br/>
              <label for="assigned">Assigned to</label> <br/><br/>
              <label for="owner">Project Owner</label> <br/><br/>
              <label for="project">Project</label> <br/><br/>
              <label for="other">Other, per SQL DB</label> <br/><br/>
            </div>

            <div className="new-col">
              <input type="text" id="task"></input><br/><br/>
              <input type="date" id="date"></input><br/><br/>
              <input type="text" id="assigned"></input><br/><br/>
              <input type="text" id="owner"></input><br/><br/>
              <input type="text" id="proj"></input><br/><br/>
              <input type="text" id="otherid"></input><br/><br/>
            </div>

            <div className="form-items">
              <input type="submit" onClick={sendToDB} value="Submit" />
            </div>
          </form>

          {/* <form>
            <div className="form-items">
              <label className="form-items" for="task">Task name</label>
              <input className="form-items" type="text" id="task"></input><br/>
            </div>
            
            <div className="form-items">
              <label for="date">Due date</label>
              <input type="date" id="date"></input><br/>
            </div>

            <div className="form-items">
              <label for="assigned">Assigned to</label>
              <input type="text" id="assigned"></input><br/>
            </div>
            
            <div className="form-items">
              <label for="owner">Project Owner</label>
              <input type="text" id="owner"></input><br/>
            </div>
            
            <div className="form-items">
              <label for="project">Project</label>
              <input type="text" id="proj"></input><br/>
            </div>
            
            <div className="form-items">
              <label for="other">Other, per SQL DB</label>
              <input type="text" id="otherid"></input><br/>
            </div>

            <div className="form-items">
              <input type="submit" onClick={sendToDB} value="Submit" />
            </div>
          </form> */}

        </div>
      </div>
    );
  }

  // note for new task submission: we need to confirm that the submit button is going to collect all the info from the form that we need to sent to SQL



  export default TaskCreator;

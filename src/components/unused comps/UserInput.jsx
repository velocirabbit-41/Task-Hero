import React from 'react';
//import children
import TaskContainer from '../TaskContainer.jsx'

const UserInput = (props) => {
    return(
      <div className='main-container'>
        <label>User Input</label>
       <TaskContainer/>
      </div>
    );
  }

  export default UserInput;

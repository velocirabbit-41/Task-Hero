import React from 'react';

import UnassignedTaskList from './UnassignedTaskList.jsx';


const TaskCreator = (props) => {
    return(
      <div className='task-creator'>
        <UnassignedTaskList/>
      </div>
    );
  }

  export default TaskCreator;

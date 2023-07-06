import React from 'react';
//import the child component(s)
import Header from './Header';
import TaskContainer from './TaskContainer';
import '../style.css';

const App = () => {
  return (
    <div id='root'>
      <Header />
      <TaskContainer />
      <br/>
      <p>a project by Alana, Cameron, Dawit, and Josh</p>
    </div>
  );
};

export default App;

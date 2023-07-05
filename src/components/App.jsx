import React from 'react';
//import the child component(s)
import Header from './Header';
import TaskContainer from './TaskContainer';
import '../style.css';

const App = () => {
  return (
    <div id='app'>
      <Header />
      <TaskContainer />
    </div>
  );
};

export default App;

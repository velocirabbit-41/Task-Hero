import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import App from './components/App.jsx';
// import store from './store';

// const title = document.createElement('h3');
// title.textContent = 'Webpack made easy!';
// const page = document.querySelector('body');
// page.append(title);

const root = createRoot(document.getElementById('root'));
root.render(
  // wrap the App in the Provider Component and pass in the store

  <App />
);

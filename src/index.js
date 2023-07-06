// if (process.env.NODE_ENV != 'production') {
//   require('dotenv').config();
// }

import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

// const title = document.createElement('h3');
// title.textContent = 'Webpack made easy!';
// const page = document.querySelector('body');
// page.append(title);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = createRoot(document.getElementById('root'));
root.render(
  // wrap the App in the Provider Component and pass in the store
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

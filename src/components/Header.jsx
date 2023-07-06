// right now this is a mess, copied from App.jsx
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
// import Profile from './components/Profile';

const Header = () => {
  // will depend on how we get to login page.
  // If we do conditional rendering
  // const [wasClicked, setWasClicked] = useState(false);
  // const getPageClicker = () => {
  //   setWasClicked(true);

  // }
  // If we do a simple <a href... /> then it just worked like a link
  const { loginWithRedirect, logout, isAuthenticated, isLoading, error } =
    useAuth0();
  // const { logout, isAuthenticated } = useAuth0();
  return (
    <div className='nav-bar'>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          {/* <Profile /> */}
        </>
      )}
      <div className='spacer'></div>
      <div className='spacer'>Velocirabbits</div>
      <div className='login-btn'>Login & Signup</div>
      {/* <button className='login-btn'>login/signup</button> */}
    </div>
  );
};

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && <button onClick={() => logout()}>Sign Out</button>;
};

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Sign In</button>
    )
  );
};
export default Header;

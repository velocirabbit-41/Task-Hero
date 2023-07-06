// right now this is a mess, copied from App.jsx

import React, { useEffect, useState } from 'react';

const Header = () => {
  // will depend on how we get to login page.
  // If we do conditional rendering
  // const [wasClicked, setWasClicked] = useState(false);
  // const getPageClicker = () => {
  //   setWasClicked(true);

  // }
  // If we do a simple <a href... /> then it just worked like a link

  return (
    <div className='nav-bar'>
      <div className='spacer'></div>
      <div className='spacer'>Velocirabbits</div>
      <div className='login-btn'>Login & Signup</div>
      {/* <button className='login-btn'>login/signup</button> */}
    </div>
  );
};

export default Header;

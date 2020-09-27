import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='link'>
        <Link to='/'>Landing Page</Link>
      </div>
      <div className='link'>
        <Link to='/profile'>Profile</Link>
      </div>
      <div className='link'>
        <Link to='/challenges/all'>View Challenges</Link>
      </div>
      <div className='link'>
        <Link to='/challenges/create'>Create Challenge</Link>
      </div>
      <div className='link'>
        <Link to='/groups/create'>Create Group</Link>
      </div>
      <div className='link'>
        <Link to='/groups/find-group'>Find Group</Link>
      </div>
      <div className='link-end'>
        <Link to='/logout'>Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;

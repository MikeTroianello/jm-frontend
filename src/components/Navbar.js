import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Landing Page</Link>
      <Link to='/home'>Home</Link>
      <Link to='/blog'>blog</Link>
      <Link to='/test'>test</Link>
    </div>
  );
};

export default Navbar;

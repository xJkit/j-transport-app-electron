import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      J.Transport Console
    </div>
    <ul>
      <li>
        <Link to="/">MRT</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <hr />
  </div>
);
export default Navbar;

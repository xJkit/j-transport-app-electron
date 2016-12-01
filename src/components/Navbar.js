import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Navbar = ({ fetchData }) => (
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
    <button onClick={() => fetchData()}>手動刷新</button>
  </div>
);

Navbar.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Navbar;

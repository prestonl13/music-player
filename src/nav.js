import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
          <h1 className= "logo"> ♫  Music Searcher</h1>
      </div>
      
      <div className="navbar-center">
        <ul className="nav-links">
          <li className="nav-links">
            <Link to="/home"  >Home</Link>
          </li>
          <li className="nav-links">
            <Link to="/searchpage " >Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
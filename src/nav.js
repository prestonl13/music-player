import React from 'react';
import './nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {



  return (

  <nav className="navbar">
    <div className="navbar-left">
     <a href="/App.js" className="logo">
       Music Player
     </a>
    </div>
    
    <div className="navbar-center">
     <ul className="nav-links">
       <li>
         <Link to="/SearchPage"> Search </Link>
       </li>
       <li>
         <a href="/about">About Us</a>
       </li>
        <li>
         <a href="/contact">Contact</a>
       </li>
      </ul>
    </div>
  </nav>
);
};

export default Nav;
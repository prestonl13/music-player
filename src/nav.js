import React from 'react';
import './nav.css';
import { useState } from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
      setSearchTerm(searchTerm);
      const results = performSearch(searchTerm);
      setSearchResults(results);
  };

  const performSearch = (searchTerm) => {
    const data = ["Abbey Road",  // rock
      "Thriller",   // pop
      "To Pimp a Butterfly",  // hip hop
      "Random Access Memories", // electronic
      "Beethoven: Symphony No. 9", // classical
      "The Dark Side of the Moon", // rock
      "Future Nostalgia", // pop
      "good kid, m.A.A.d city", // hip hop
      "Play", // electronic
      "A Night at the Opera", // classical
      "Back in Black", // rock
      "Lover", // pop
      "The Miseducation of Lauryn Hill", // hip hop
      "Discovery", // electronic
      "The Four Seasons", // classical
    ]
  };
  
    if(!searchTerm){
        return data;
    }
    const filteredData = data.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredData;
  };

  return (

  <nav className="navbar">
    <div className="navbar-left">
     <a href="/App.js" className="logo">
       Music Player
     </a>
    </div>
    <div className ="navbar-center">
      <SearchBar onSearch={handleSearch} />
      <h2>Results for "{searchTerm}":</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
    
    <div className="navbar-center">
     <ul className="nav-links">
       <li>
         <a href="/music">Music</a>
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

export default Navbar;
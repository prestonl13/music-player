import './App.css';
import React from 'react';
import data from './data.js';
import {Gallery} from './Gallery.js';
import './App.css';
import SearchBar from './SearchBar.js';
import { useState } from 'react';
import {nav} from './nav.js';

function App() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <nav/>
      <SearchBar class = "center" />
      <Gallery data = {data.keyboards} />
    </div>
  );
}

export default App;

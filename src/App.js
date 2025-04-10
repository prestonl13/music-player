import './App.css';
import React from 'react';
import {Gallery} from './Gallery.js';
import './App.css';
import SearchBar from './SearchBar.js';
import { useState } from 'react';
import ImageSlider from './ImageSlider.js';
import {nav} from './nav.js';

function App() {

  const slides = [
    {url: 'https://media.cnn.com/api/v1/images/stellar/prod/230515101146-the-weeknd-121222.jpg?c=original', title: 'The Weeknd'},
    {url: 'https://i8.amplience.net/i/naras/bruno-mars_MI0004141313-MN0001032082', title: 'Bruno Mars'},
    {url: 'https://c.files.bbci.co.uk/048c/live/2bb03f70-1753-11ef-b507-edbcd7518f5c.jpg', title: 'Billie Eillish'},
    {url: 'https://variety.com/wp-content/uploads/2017/11/kendrick-lamar-variety-hitmakers.jpg', title: 'Kendrick Lamar'},
    {url: 'https://slpecho.com/wp-content/uploads/2024/10/sabrina-carpenter-061724-tout-9f62f8da05e544e3a8333d032fb05faa-1200x801.jpg', title: 'Sabrina Carpenter'},
  ]

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <nav/>
      <ImageSlider slides = {slides} />
      <SearchBar class = "center" />
      <Gallery data = {data.keyboards} />
    </div>
  );
}

export default App;

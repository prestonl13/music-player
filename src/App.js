import "./App.css";
import React from "react";
import {Gallery} from "./Gallery.js";
import "./App.css";
import SearchBar from "./SearchBar.js";
import { useState } from "react";
import ImageSlider from "./ImageSlider.js";

function App() {

  const slides = [
    {url: "/workspaces/music-player/public/theweeknd.jpg", title: "The Weeknd"},
    {url: "/workspaces/music-player/public/bruno.jpg", title: "Bruno Mars"},
    {url: "/workspaces/music-player/public/billie.jpg", title: "Billie Eillish"},
    {url: "/workspaces/music-player/public/kendrick.jpg", title: "Kendrick Lamar"},
    {url: "/workspaces/music-player/public/sabrina.jpg", title: "Sabrina Carpenter"},
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <div style = {containerStyles}>
        <ImageSlider slides = {slides} />
      </div>
      <SearchBar class = "center" />
    </div>
  );
}

export default App;

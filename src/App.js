import "./App.css";
import React from "react";
import {Gallery} from "./Gallery.js";
import "./App.css";
import SearchBar from "./SearchBar.js";
import { useState } from "react";
import ImageSlider from "./ImageSlider.js";

function App() {

  const slides = [
    {url: "/theweeknd.jpg", title: "The Weeknd"},
    {url: "/bruno.jpg", title: "Bruno Mars"},
    {url: "/billie.jpg", title: "Billie Eillish"},
    {url: "/kendrick.webp", title: "Kendrick Lamar"},
    {url: "/sabrina.jpg", title: "Sabrina Carpenter"},
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
      <SearchBar />
    </div>
  );
}

export default App;

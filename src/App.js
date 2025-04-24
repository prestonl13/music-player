import "./App.css";
import React from "react";
import {Gallery} from "./Gallery.js";
import "./App.css";
import data from "./data.js";
import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider.js";
import Navbar from "./nav.js";

function App() {

  const slides = [
    {url: "/theweeknd.jpg", title: "The Weeknd"},
    {url: "/bruno.jpg", title: "Bruno Mars"},
    {url: "/billie.jpg", title: "Billie Eillish"},
    {url: "/kendrick.webp", title: "Kendrick Lamar"},
    {url: "/sabrina.jpg", title: "Sabrina Carpenter"},
  ];

  const containerStyles = {
    width: "1000px",
    height: "500px",
    margin: "0 auto",
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
  <div className = "main">      
   
    <Navbar />
    <div style = {containerStyles}>
      <ImageSlider slides = {slides} />
    </div>
    <Gallery data = {data.albums} />
  </div>
  );
}

export default App;

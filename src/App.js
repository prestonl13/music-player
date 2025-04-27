import "./App.css";
import React from "react";
import {Gallery} from "./Gallery.js";
import "./App.css";
import data from "./data.js";
import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider.js";
import Nav from "./nav.js";
import SearchPage from "./SearchPage.js";
import { Routes, Route } from "react-router-dom";

function App() {
  const [results, setResults] = useState([]);

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

  return (
  <div className = "main">
    <Routes>
      <Route path="/SearchPage" element = {<SearchPage/>} />
    </Routes>


    <Nav />


    <div style = {containerStyles}>
      <ImageSlider slides = {slides} />
    </div>


    <Gallery data = {data.albums} />


  </div>
  );
}

export default App;
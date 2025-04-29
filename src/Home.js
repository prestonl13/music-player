import "./App.css";
import React from "react";
import {Gallery} from "./Gallery.js";
import data from "./data.js";
import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider.js";
import Nav from "./nav.js";

function Home() {
  const [results, setResults] = useState([]);

  const slides = [
    {url: "/theweeknd.jpg", title: "The Weeknd"},
    {url: "/bruno.jpg", title: "Bruno Mars"},
    {url: "/billie.jpg", title: "Billie Eilish"},
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
      <Nav />
      
      <div style = {containerStyles}>
        <ImageSlider slides = {slides} />
      </div>
      
      <div className = "intro">
        <h2>
          Hello! Welcome to our Music Searcher. To utilize the website, please go to the Search Page. If you want to look around for now, feel free to look at the album gallery.
        </h2>
      </div>

      <Gallery data = {data.albums} />
    </div>
  );
}

export default Home;
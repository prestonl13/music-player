import "./App.css";
import React from "react";
import {Gallery} from "./Gallery.js";
import "./App.css";
import data from "./data.js";
import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider.js";
import Navbar from "./nav.js";

function App() {

  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const searchAlbums = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    
    try {
      // MusicBrainz API endpoint for searching releases (albums)
      const url = `https://musicbrainz.org/ws/2/release?query=${encodeURIComponent(query)}&fmt=json`;
      
      const response = await fetch(url, {
        headers: {
          // Important: Set a proper user agent as mentioned in MusicBrainz guidelines
          'User-Agent': 'SimpleAlbumGallery/0.1 (your-email@example.com)'
        }
      });
      
      const data = await response.json();
      setAlbums(data.releases || []);
    } catch (error) {
      console.error('Error searching albums:', error);
      alert('Failed to search albums. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    searchAlbums();
  };

  // View album details
  const viewAlbumDetails = async (album) => {
    setSelectedAlbum(album);
  };

  // Back to album list
  const backToList = () => {
    setSelectedAlbum(null);
  };

  // Get cover art URL from Cover Art Archive
  const getCoverArtUrl = (mbid) => {
    return `https://coverartarchive.org/release/${mbid}/front-250`;
  };


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

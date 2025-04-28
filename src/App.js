import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import SearchPage from "./SearchPage.js";
import Home from "./Home.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = { <Home/> } />
          <Route path="/home" element = {<Home/>} />
          <Route path="/searchpage" element = {<SearchPage/>} />
          <Route path="*" element = { <Home/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
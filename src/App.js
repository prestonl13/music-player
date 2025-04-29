import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import SearchPage from "./SearchPage.js";
import Home from "./Home.js";
import NoPage from "./NoPage.js";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
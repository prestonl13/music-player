import React from "react";
import Nav from "./nav.js";
import "./App.css";
import SearchBar from "./SearchBar.js";
import { useState } from 'react';
import {Gallery} from './Gallery.js';
import data from './data.js';



function SearchPage() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    };


    return(
        <div>
            <Nav />

            <SearchBar />

        </div>
    );
}

export default SearchPage;


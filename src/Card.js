import React from 'react';
import './App.css';

export const Card = (props) => {
  //console.log(props)
  let info = props.data
  return (
        <div className="card">
            <img src={info.image} alt=""/> 
            <div className = "carddesc"> 
              <h1>{info.title}</h1>
              <p>{info.artist}</p>
            </div>
        </div>
  );
}
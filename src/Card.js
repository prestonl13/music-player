import React from 'react';
import './App.css';

export const Card = (props) => {
  //console.log(props)
  let info = props.data
  return (
        <div className="card">
            <h1>{info.title}</h1>
            <img src={info.image} alt=""/> 
            <br />
            <a href={info.image}> {info.title} </a>
        </div>
  );
}
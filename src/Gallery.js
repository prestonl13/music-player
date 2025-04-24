import React from 'react';
import {Card} from './Card.js';
import "./Gallery.css";


export const Gallery = (props) => {
  // console.log(props)
  return (
        <div className="container">
          {props.data.map((item,key) => <Card key={key} data={item} />)} 
        </div>
  );
}
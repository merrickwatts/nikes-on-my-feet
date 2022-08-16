import React from "react";

export default function ProductCard(props) {
  return (
    <div className="container">
      <div className="card">
        <img></img>
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">Size: {props.size}</p>
          <p className="review-text">{props.review}</p>
        </div>
      </div>
    </div>
  );
}

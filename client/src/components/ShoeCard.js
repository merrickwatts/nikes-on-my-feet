import React from "react";

export default function ShoeCard(props) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="text-light">{props.shoeName}</span>
      </div>
      <div className="card-body flex-row">
        <div className="card-photo-holder">
          <img src={`./images/shoes/${props.photo}`} alt="A Shoe"></img>
        </div>
        <div className="card-info-holder col-12 col-lg-8">
          <p>{props.shoeDisc}</p>
          <p>Size: {props.shoeSize}</p>
          <p>{props.gender}</p>
          <h3>Price: {props.shoePrice}</h3>
        </div>
      </div>
    </div>
  );
}

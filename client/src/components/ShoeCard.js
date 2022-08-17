import React, { useState } from "react";

import Auth from "../utils/auth";

export default function ShoeCard(props) {
  const [reviewActive, setReviewActive] = useState(false);

  const handleReviewButton = () => {
    setReviewActive(true);
  };

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
          {Auth.loggedIn() && !reviewActive ? (
            <button onClick={handleReviewButton}>leave review</button>
          ) : (
            <p></p>
          )}
          {reviewActive == true && (
            <div>
              <textarea />
              <button>Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

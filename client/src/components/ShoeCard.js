import React, { useState } from "react";

import Auth from "../utils/auth";

import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../utils/mutations";

export default function ShoeCard(props) {
  const [reviewActive, setReviewActive] = useState(false);
  const [reviewBody, setBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  let shoeID = props.shoeId;

  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addReview({
        variables: { reviewBody, shoeID },
      });

      // clear form value
      setBody("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

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
              <textarea placeholder="Leave a review about this shoe" />
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

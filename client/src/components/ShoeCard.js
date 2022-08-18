import React, { useState } from "react";

import Auth from "../utils/auth";

import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../utils/mutations";

export default function ShoeCard(props) {
  const [reviewActive, setReviewActive] = useState(false);
  const [reviewBody, setBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addReview, { error }] = useMutation(ADD_REVIEW);

  let shoeId = props.shoeId;

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };
  console.log("body: " + reviewBody, "ID: " + shoeId);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addReview({
        variables: { reviewBody, shoeId },
      });

      // clear form value
      setBody("");
      setReviewActive(false);
      setCharacterCount(0);
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  const handleReviewButton = () => {
    setReviewActive(true);
  };

  let randomReview = Math.floor(Math.random() * props.review.length);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
          <p>{capitalizeFirstLetter(props.gender)}</p>
          <h3>Price: ${props.shoePrice}</h3>
          {Auth.loggedIn() && !reviewActive ? (
            <button className="btn" onClick={handleReviewButton}>
              Leave Review
            </button>
          ) : (
            <p></p>
          )}
          {reviewActive == true && (
            <div className="flex-row">
              <textarea
                placeholder="Leave a review about this shoe"
                value={reviewBody}
                onChange={handleChange}
              />
              <button className="btn ml-3" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
      {props.review[0] !== undefined ? (
        <div className="ml-4">
          <p>
            {props.review[randomReview].username} said:{" "}
            {props.review[randomReview].reviewBody}
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

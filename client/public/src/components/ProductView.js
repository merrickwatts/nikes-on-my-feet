import e from "express";
import React from "react";
const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };
function ProductView({ currentPage, handlePageChange }) {
  return (
    <div>
      <img></img>
      <button>Buy it now!</button>
      <form className="review-form">
        <input>
          <input
            value={review}
            name="review"
            onChange={handleInputChange}
            type="text"
            placeholder="review"
          />
        </input>
      </form>
    </div>
  );
}
export default ProductView;

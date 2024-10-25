// import React from "react";
import React, { useState } from "react";
// import axiosInstance from "../api/axiosInstance";

const FeedbackForm = () => {
const [feedback, setFeedback] = useState([]);

const handleChange = (e) => {
  setFeedback(e.target.value)
}

const handleClick = () => {

}

    return (
      <form>
        <input type="radio" name="category" />ポジティブ
        <input type="radio" name="category" />ネガティブ
        <input type="radio" name="category" />その他<br />
        <textarea value={feedback} onChange={handleChange}>あいうえお</textarea>
        <input type="submit" onClick={handleClick} />
      </form>
    );
};

export default FeedbackForm;

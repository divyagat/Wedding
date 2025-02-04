import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

const categories = [
  "Wedding",
  "Birthday",
  "Engagement",
  "Baby Shower",
  "House Warming",
  "Anniversary Celebration",
  "Marriage Biodata",
  "Inauguration",
];

const Cards = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="title">Wedding Cards</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {categories.map((category, index) => (
          <button key={index} className="custom-btn">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cards;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

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

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="container text-center my-5">
      <h2 className="title">Wedding Cards</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className="custom-btn"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;

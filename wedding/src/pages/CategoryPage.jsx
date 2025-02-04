import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    setError("");
    setFetchedData([]);

    try {
      const response = await axios.get("http://localhost:5000/api/get-style", {
        params: { category },
      });
      setFetchedData(response.data);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    }

    setLoading(false);
  };

  // Navigate to the Details page
  const handleCardClick = (item) => {
    navigate("/details", { state: { item } });
  };

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Choose a Category</h2>
      
      {/* Category Buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn ${selectedCategory === category ? "btn-success" : "btn-primary"}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display fetched data inside cards */}
      <div className="row mt-4">
        {loading && <p className="text-warning">Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        
        {fetchedData.length > 0 &&
          fetchedData.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div
                className="card shadow-sm"
                onClick={() => handleCardClick(item)}
                style={{ cursor: "pointer" }}
              >
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-outline-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;

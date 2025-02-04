import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryPage from "./pages/CategoryPage";
import Details from "./pages/Details";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/Details" element={<Details/>}/>
    </Routes>
  );
};

export default App;
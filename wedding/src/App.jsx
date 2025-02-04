import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryPage from "./pages/CategoryPage";
import Details from "./pages/Details";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

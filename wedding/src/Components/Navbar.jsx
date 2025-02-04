import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // This includes Popper.js as well
import { Link } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";
import "../Components/Navbar.css"
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm fixed-sticky">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Logo Section */}
                            <div className="col-4 d-flex align-items-center">
                                <a href="#" className="d-flex align-items-center">
                                    <img
                                        src="/src/Components/Componentsimg/images-removebg-preview 1 (1).png"
                                        alt="Logo"
                                        className="navbarimg me-2"
                                        style={{ width: '100px' }}
                                    />
                                </a>
                                {/* Toggle Button for Mobile */}
                                <button
                                    className="navbar-toggler mx-auto"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>


                            </div>

                            {/* Navigation Links */}
                            <div className="col-8">
                                <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link fw-semibold me-3 fs-5 text-dark nav-hover" to="/">Wedding</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-semibold mx-3 fs-5 text-dark nav-hover" to="#">Birthday</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-semibold mx-3 fs-5 text-dark nav-hover" to="#">Gallery</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-semibold mx-3 fs-5 text-dark nav-hover" to="#">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link fw-semibold mx-3 fs-5 text-dark nav-hover" to="#">Contact</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Search Bar */}
                                <form className="d-flex mt-3 ms-2 mt-lg-0 justify-content-start ms-5 ms-lg-1" role="search"><VscThreeBars className="d-none d-lg-block icon" />
                                    <input
                                        className="form-control me-2 w-50 ms-5 ms-lg-1"
                                        type="search"
                                        placeholder="Search..."
                                        aria-label="Search"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Inline CSS for Styling & Hover Effects */}
            <style jsx>{`
                .nav-hover:hover {
                    color: #0d6efd !important;  /* Bootstrap Primary Color */
                    text-decoration: underline;
                    transition: all 0.3s ease-in-out;
                    transform: scale(1.05);  /* Slight zoom effect */
                }

                .navbar {
                    background: linear-gradient(to right, #ffffff, #f8f9fa);  /* Subtle gradient for modern look */
                }

                @media (max-width: 768px) {
                    .navbarimg {
                        width: 40px;  /* Adjust logo size for mobile */
                    }
                }
            `}</style>
        </>
    );
}

export default Navbar;

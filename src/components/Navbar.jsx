import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../App.css";
import Hero from"./Hero";
import About from"./About";
import Contact from"./Contact";
import Pricing from"./Pricing";
import Services from"./Services";
function Navbar() {
  return (
    <div className="container py-4">

    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <Link className="nav-link active fw-semibold" aria-current="page" to={Hero}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to={Services}>
                Services
              </Link>
            </li>            
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to={About}>
                About
              </Link>
            </li>            
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#">
                Pricing
              </a>
            </li>            
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to={Contact}>
                Contact
              </Link>
            </li>            
            <li className="nav-item">
              <button className="btn btn-primary">
                Get Started
              </button>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
export default Navbar;

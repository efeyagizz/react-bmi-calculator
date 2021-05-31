import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
      <nav className="navbar-expand-xl navbar-light bg-light">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="navbar-brand" href="/">
            
            BMI Calculator
            <i className="brandLogo fas fa-leaf"></i>
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active infoLink" to="/info">
                Nedir ?
                </Link>
            </div>
            </div>
        </div>
      </nav>
  );
}

export default Navbar;

import React from "react";
import propTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            
            {props.pricing? <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing
              </Link>
            </li>: "no pricing"}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Your default title",
  pricing: true 
}

Header.propTypes = {
  title: propTypes.string,
  pricing: propTypes.bool
}

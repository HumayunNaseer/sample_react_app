import React from "react";
import propTypes from 'prop-types'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
            
            {props.pricing? <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
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

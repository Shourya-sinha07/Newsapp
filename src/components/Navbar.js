// for funtion base component press rfc and enter and for class base component type rcep + enter
// import React, { Component } from "react";
import { Link } from "react-router-dom";

// converting navbar into function based component 

// export class Navbar extends Component {   => this is for class based component
const Navbar=()=>{
  // render() { =>comminting out render function for funtion based component 
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Cookru-ku
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
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general">
                    General
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  // } =>comminting out render function closing bracket for funtion based component
}

export default Navbar;

import React, { Component } from 'react';

class Header extends Component {
  //   state = {};
  render() {
    return (
      <nav
        id="menu"
        className="navbar fixed-top navbar-expand-lg bg-white navbar-light px-md-5"
      >
        <a className="navbar-brand" href="index.html">
          <img
            className="img-fluid"
            src="images/glinorcal-lightbg.png"
            alt="glinorcal-lightbg.png"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="services.html">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-nowrap" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="news.html">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

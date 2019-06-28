import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Homepage = () => {
  return (
    <>
      <Header />
      <header>
        <div
          id="main-carousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#main-carousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#main-carousel" data-slide-to={1} />
            <li data-target="#main-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            {/* Slide One */}
            <div id="main-img-1" className="carousel-item active" />
            {/* Slide Two */}
            <div id="main-img-2" className="carousel-item" />
            {/* Slide Three */}
            <div id="main-img-3" className="carousel-item" />
          </div>
          <a
            className="carousel-control-prev"
            href="#main-carousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#main-carousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>

      <Footer />
    </>
  );
};

export default Homepage;

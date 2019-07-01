import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { UncontrolledCarousel } from 'reactstrap';
import Footer from '../components/Footer/Footer';
import { items } from '../components/Carousel/carouselImages';

class Homepage extends Component {
  render() {
    return (
      <>
        <Header />
        <UncontrolledCarousel items={items.homepage} />
        <Footer />
      </>
    );
  }
}

export default Homepage;

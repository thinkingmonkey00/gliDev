import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

class Homepage extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousel />
        <Footer />
      </>
    );
  }
}

export default Homepage;

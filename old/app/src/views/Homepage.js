import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { items } from '../components/Carousel/carouselImages';

const Homepage = () => {
  return (
    <>
      <UncontrolledCarousel items={items.homepage} />
    </>
  );
};

export default Homepage;

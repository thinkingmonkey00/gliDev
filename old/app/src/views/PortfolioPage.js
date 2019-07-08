import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { items } from '../components/Carousel/carouselImages';

const Portfolio = () => {
  return (
    <>
      <UncontrolledCarousel items={items.portfolio} />
    </>
  );
};

export default Portfolio;

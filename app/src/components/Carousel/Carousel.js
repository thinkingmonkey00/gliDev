import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledCarousel } from 'reactstrap';


const Carousel = ({ imgSet, key }) => (
  <UncontrolledCarousel imgSet={imgSet} key={key} />
)

export default Carousel;

UncontrolledCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool, // default: true
  controls: PropTypes.bool, // default: true
  autoPlay: PropTypes.bool // default: true
};

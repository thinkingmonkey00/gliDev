import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('../../assets/images/glinorcal-stone-walls-patio-carpentry.jpg'),
    altText: 'filler',
    caption: 'filler',
    header: 'filler'
  },
  {
    src: require('../../assets/images/Piedmont-sweeping-front.jpg'),
    altText: 'filler',
    caption: 'filler',
    header: 'filler'
  },
  {
    src: require('../../assets/images/glinorcal-stone-path-masonry-glass-privacy-walls.jpg'),
    altText: 'filler',
    caption: 'filler',
    header: 'filler'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;

UncontrolledCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool, // default: true
  controls: PropTypes.bool, // default: true
  autoPlay: PropTypes.bool // default: true
};

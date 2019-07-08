import { LOAD_IMAGES } from '../constants/action-types';

export const homepageImages = payload => {
  return { type: LOAD_IMAGES, payload };
};

import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  review: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  // IMG_S: (pictureId) => `${CONFIG.BASE_URL}images/small/${pictureId}`,
  // IMG_M: (pictureId) => `${CONFIG.BASE_URL}images/medium/${pictureId}`,
  // IMG_L: (pictureId) => `${CONFIG.BASE_URL}images/large/${pictureId}`,
};

export default API_ENDPOINT;

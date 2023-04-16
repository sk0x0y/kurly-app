import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api.kurly.com' : '/api',
  timeout: 3000,
});

export { getToken } from './token';
export { getMainBanner } from './main-banner';
export { getTodayRecommendation } from './today-recommendation';
export { getRandomCollection } from './random-collection';
export { getMdChoice } from './md-choice';
export { getNewProduct } from './market/new-product';
export { getBestProduct } from './market/best-product';

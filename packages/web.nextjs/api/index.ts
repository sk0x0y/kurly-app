import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api.kurly.com' : '/api',
  timeout: 3000,
});

export { getToken } from './token';
export { getMainBanner } from './main-banner';
export { getTodayRecommendation } from './today-recommendation';

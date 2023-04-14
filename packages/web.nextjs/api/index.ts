import axios from 'axios';
import * as process from 'process';

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api.kurly.com' : '/api',
  timeout: 3000,
});

export { getToken } from './token';

import axios from 'axios';

export function getToken() {
  // return axios.get(process.env.NODE_ENV === 'production' ? 'https://www.kurly.com/nx/api/session' : '/nx/api/session');
  return axios.get('/nx/api/session');
}

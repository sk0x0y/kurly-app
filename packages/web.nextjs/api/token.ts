import axios from 'axios';

export function getToken() {
  // return axios.get(process.env.NODE_ENV === 'production' ? 'https://www.kurly.com/nx/api/session' : '/nx/api/session');
  return axios.get(process.env.NODE_ENV === 'production' ? '/nx/api/session' : 'http://localhost:3000/nx/api/session');
}

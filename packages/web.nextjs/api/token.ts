import { axiosInstance } from './index';

export function getToken() {
  return axiosInstance.get<{ accessToken: string }>('/nx/api/session');
}

import { axiosInstance } from './index';

export function getMdChoice(token: string) {
  return axiosInstance.get('/main/v3/sites/market/sections/7/md-choices/907/products', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

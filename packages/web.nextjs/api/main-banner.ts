import { axiosInstance } from './index';

export function getMainBanner(token: string) {
  return axiosInstance.get('/main/v3/sites/market/sections/346/main-banner', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

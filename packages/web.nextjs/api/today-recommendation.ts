import { axiosInstance } from './index';

export function getTodayRecommendation(token: string) {
  return axiosInstance.get('/main/v3/sites/market/sections/25/today-recommendation', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

import { axiosInstance } from '../index';

export function getCategoryGroup(token: string) {
  return axiosInstance.get('/collection/v2/home/sites/market/category-groups', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

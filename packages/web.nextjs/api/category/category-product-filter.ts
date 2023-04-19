import { axiosInstance } from '../index';

export function getCategoryProductFilter(token: string, categoryId: string) {
  return axiosInstance.get(`/collection/v2/home/sites/market/product-categories/${categoryId}/filters`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

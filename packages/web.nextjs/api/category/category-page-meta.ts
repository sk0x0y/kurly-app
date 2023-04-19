import { axiosInstance } from '../index';

export function getCategoryPageMeta(token: string, categoryId: string) {
  return axiosInstance.get(`/collection/v2/home/product-categories/${categoryId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

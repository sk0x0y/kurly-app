import { axiosInstance } from '../index';

export function getCategory(token: string, categoryId: string) {
  return axiosInstance.get(`/collection/v2/home/product-categories/${categoryId}/product-categories`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

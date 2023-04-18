import { axiosInstance } from '../index';

export function getCategoryProduct(token: string, categoryId: string) {
  return axiosInstance.get(
    `/collection/v2/home/product-categories/${categoryId}/products?sort_type=4&page=1&per_page=15&filters=`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

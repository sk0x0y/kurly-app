import { axiosInstance } from '../index';

export function getBudgetProduct(token: string) {
  return axiosInstance.get(
    '/collection/v2/home/product-collections/market-time-sales/products?sort_type=5&page=1&per_page=96&filters=',
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

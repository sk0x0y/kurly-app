import { axiosInstance } from '../index';

export function getBestProduct(token: string) {
  return axiosInstance.get(
    '/collection/v2/home/product-collections/market-best/products?sort_type=4&page=1&per_page=96&filters=',
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

import { axiosInstance } from '../index';

export function getNewProduct(token: string) {
  return axiosInstance.get(
    '/collection/v2/home/product-collections/market-newproduct/products?sort_type=0&page=1&per_page=96&filters=',
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
}

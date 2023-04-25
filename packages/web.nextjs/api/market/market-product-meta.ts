import { axiosInstance } from '../index';
import { FilterType } from '../../infrastructure/interface/filter.interface';

export function getMarketProductMeta(token: string, type: FilterType) {
  return axiosInstance.get(`/collection/v2/home/product-collections/${type}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

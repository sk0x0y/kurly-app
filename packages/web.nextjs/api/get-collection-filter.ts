import { axiosInstance } from './index';
import { FilterType } from '../infrastructure/interface/filter.interface';

export function getCollectionFilter(token: string, type: FilterType) {
  return axiosInstance.get(`/collection/v2/home/sites/market/product-collections/${type}/filters`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

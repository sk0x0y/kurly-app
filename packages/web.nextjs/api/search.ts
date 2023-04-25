import { axiosInstance } from './index';
import { SearchQuery } from '../infrastructure/interface/search.interface';

export function getSearch(token: string, q: SearchQuery) {
  return axiosInstance.get(`/search/v3/sites/market/normal-search?keyword=${q}&page=1&per_page=12`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

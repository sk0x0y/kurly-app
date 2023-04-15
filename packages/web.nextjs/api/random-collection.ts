import { axiosInstance } from './index';

export function getRandomCollection(token: string, collectionId: number = 11) {
  return axiosInstance.get(`/main/v3/sites/market/sections/${collectionId}/random-collection`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

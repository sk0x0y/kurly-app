import { axiosInstance } from '../index';

export function getPromotion(token: string) {
  return axiosInstance.get('/banner-cloud/market/event/list?exposureType=EXPOSED', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { RootState } from '../infrastructure/redux';
import { IKurlyProduct } from '../infrastructure/interface/product.interface';

export function useTodayRecommendation() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<AxiosResponse<IKurlyProduct>>(
    ['today-recommendation'],
    () => api.getTodayRecommendation(token),
    {
      onSuccess: res => {
        console.log(res.data.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

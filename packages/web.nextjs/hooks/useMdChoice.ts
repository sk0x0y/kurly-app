import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { RootState } from '../infrastructure/redux';
import { IKurlyProductData } from '../infrastructure/interface/product.interface';

export function useMdChoice() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<AxiosResponse<{ data: IKurlyProductData[] }>>(['md-choice'], () => api.getMdChoice(token), {
    onSuccess: res => {
      console.log('md-choice', res.data);
    },
    enabled: !!token,
  });

  return { ...result };
}

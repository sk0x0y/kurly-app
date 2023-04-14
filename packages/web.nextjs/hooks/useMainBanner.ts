import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { RootState } from '../infrastructure/redux';
import { IKurlyBanner } from '../infrastructure/interface/banner.interface';

export function useMainBanner() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<AxiosResponse<{ data: IKurlyBanner }>>(['main-banner'], () => api.getMainBanner(token), {
    onSuccess: res => {
      // console.log(res.data.data.data);
    },
    enabled: !!token,
  });

  return { ...result };
}

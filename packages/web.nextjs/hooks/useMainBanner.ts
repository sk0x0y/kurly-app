import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { RootState } from '../infrastructure/redux';
import { ISection } from '../infrastructure/interface/section.interface';
import { IKurlyBannerData } from '../infrastructure/interface/banner.interface';

export function useMainBanner() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<AxiosResponse<ISection<IKurlyBannerData[]>>>(
    ['main-banner'],
    () => api.getMainBanner(token),
    {
      onSuccess: res => {
        // console.log('main-banner', res.data.data);
        // console.log(res.data.data.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

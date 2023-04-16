import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { IKurlyPromotionBannerData } from '../../infrastructure/interface/banner.interface';

export function usePromotion() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<AxiosResponse<{ data: IKurlyPromotionBannerData[]; success: boolean }>>(
    ['market/promotion'],
    () => api.getPromotion(token),
    {
      onSuccess: res => {
        console.log('market/promotion', res.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

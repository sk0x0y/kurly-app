import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { ISection, ISectionMeta } from '../../infrastructure/interface/section.interface';
import { IKurlyProductData } from '../../infrastructure/interface/product.interface';

export function useBestProduct() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<AxiosResponse<{ data: IKurlyProductData[]; meta: ISectionMeta }>>(
    ['market/best-product'],
    () => api.getBestProduct(token),
    {
      onSuccess: res => {
        console.log('market/best-product', res.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

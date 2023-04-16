import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { ISection } from '../../infrastructure/interface/section.interface';
import { IKurlyProductData } from '../../infrastructure/interface/product.interface';

export function useNewProduct() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<AxiosResponse<ISection<IKurlyProductData[]>>>(
    ['market/new-product'],
    () => api.getNewProduct(token),
    {
      onSuccess: res => {
        console.log('market/new-product', res.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

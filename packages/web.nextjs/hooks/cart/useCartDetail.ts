import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { ICartDetail } from '../../infrastructure/interface/cart.interface';

export function useCartDetail() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);
  const cart = useSelector((state: RootState) => state.cartAdaptor.entity);

  const result = useQuery<AxiosResponse<ICartDetail>>(
    ['cart/detail'],
    () => api.getCartDetail(token, cart.selectedProduct),
    {
      onSuccess: res => {
        console.log('cart/detail', res.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

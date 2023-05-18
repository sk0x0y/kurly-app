import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { ICartDetail } from '../../infrastructure/interface/cart.interface';

export function useCartDetailMutation() {
  const queryClient = useQueryClient();

  const token = useSelector((state: RootState) => state.tokenAdaptor.token);
  const cart = useSelector((state: RootState) => state.cartAdaptor);

  const result = useMutation<AxiosResponse<ICartDetail>>(
    ['cart/detail/mutation', cart.entity],
    () => api.getCartDetail(token, cart.entity.selectedProduct),
    {
      onSuccess: res => {
        console.log('cart/detail/mutation', res.data);

        queryClient.invalidateQueries({ queryKey: ['cart/detail'] });
      },
    }
  );

  return { ...result };
}

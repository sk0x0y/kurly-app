import { useDispatch, useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { ICartDetail } from '../../infrastructure/interface/cart.interface';
import { actions } from '../../application/usecases/cart.usecase';

export function useCartDetail() {
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.tokenAdaptor.token);
  const cart = useSelector((state: RootState) => state.cartAdaptor);

  const result = useQuery<AxiosResponse<ICartDetail>>(
    ['cart/detail', cart.entity],
    () => api.getCartDetail(token, cart.entity.selectedProduct),
    {
      onSuccess: res => {
        console.log('cart/detail', res.data);

        dispatch(actions.putDetail(res.data));
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

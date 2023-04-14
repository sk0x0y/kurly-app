import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { actions } from '../application/usecases/token.usecase';

export function useToken() {
  const dispatch = useDispatch();
  const token = useQuery(['token'], () => api.getToken(), {
    onSuccess: res => {
      // window.console.log(res.data);

      dispatch(actions.set(res.data.accessToken));
    },
  });

  return { ...token };
}

import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { RootState } from '../infrastructure/redux';
import { FilterType, IFilter } from '../infrastructure/interface/filter.interface';

export function useCollectionFilter(type: FilterType) {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<
    AxiosResponse<{
      data: IFilter[];
    }>
  >([`filter/${type}`], () => api.getCollectionFilter(token, type), {
    onSuccess: res => {
      console.log(`filter/${type}`, res.data);
    },
    enabled: !!token,
  });

  return { ...result };
}

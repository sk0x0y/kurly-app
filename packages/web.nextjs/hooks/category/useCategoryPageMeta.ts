import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { IFilter } from '../../infrastructure/interface/filter.interface';

export function useCategoryPageMeta(categoryId: string) {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<
    AxiosResponse<{
      data: IFilter[];
    }>
  >(['category/page-meta'], () => api.getCategoryPageMeta(token, categoryId), {
    onSuccess: res => {
      console.log('category/page-meta', res.data);
    },
    enabled: !!token,
  });

  return { ...result };
}

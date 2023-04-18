import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { IKurlyCategoryDetail } from '../../infrastructure/interface/category.interface';

export function useCategory(categoryId: string) {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<
    AxiosResponse<{
      data: IKurlyCategoryDetail[];
    }>
  >(['category'], () => api.getCategory(token, categoryId), {
    onSuccess: res => {
      console.log('category', res.data);
    },
    enabled: !!token,
  });

  return { ...result };
}

import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { IFilter } from '../../infrastructure/interface/filter.interface';

export function useCategoryProductFilter(categoryId: string, subCategoryId?: string) {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<
    AxiosResponse<{
      data: IFilter[];
    }>
  >(
    ['filter/category-product', categoryId, subCategoryId],
    () => api.getCategoryProductFilter(token, categoryId, subCategoryId),
    {
      onSuccess: res => {
        console.log('filter/category-product', res.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

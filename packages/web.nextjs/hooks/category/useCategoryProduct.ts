import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { ISectionMeta } from '../../infrastructure/interface/section.interface';
import { IKurlyProductData } from '../../infrastructure/interface/product.interface';

export function useCategoryProduct(categoryId: string, subCategoryId?: string) {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<
    AxiosResponse<{
      data: IKurlyProductData[];
      meta: ISectionMeta;
    }>
  >(
    ['category/product', categoryId, subCategoryId],
    () => api.getCategoryProduct(token, !subCategoryId ? categoryId : categoryId + subCategoryId),
    {
      onSuccess: res => {
        console.log('category/product', res.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

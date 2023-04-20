import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { ISectionMeta } from '../../infrastructure/interface/section.interface';
import { IKurlyCategoryPageMetaData } from '../../infrastructure/interface/category.interface';

export function useCategoryPageMeta(categoryId: string) {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<
    AxiosResponse<{
      data: IKurlyCategoryPageMetaData;
      meta: ISectionMeta;
    }>
  >(['category/page-meta', categoryId], () => api.getCategoryPageMeta(token, categoryId), {
    onSuccess: res => {
      console.log('category/page-meta', res.data);
    },
    enabled: !!token,
  });

  return { ...result };
}

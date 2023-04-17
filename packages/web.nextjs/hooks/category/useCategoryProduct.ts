import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { ISectionMeta } from '../../infrastructure/interface/section.interface';
import { IKurlyCategoryGroupData } from '../../infrastructure/interface/category.interface';

export function useCategoryProduct() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);
  const router = useRouter;

  const result = useQuery<
    AxiosResponse<{
      data: { main: IKurlyCategoryGroupData[]; recommend: IKurlyCategoryGroupData[] };
      meta: ISectionMeta;
    }>
  >(['category/product'], () => api.getCategoryProduct(token, '907'), {
    onSuccess: res => {
      console.log('category/product', res.data);
    },
    enabled: !!token,
  });

  return { ...result };
}

import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { RootState } from '../infrastructure/redux';
import { SearchQuery } from '../infrastructure/interface/search.interface';
import { ISectionMeta } from '../infrastructure/interface/section.interface';
import { IKurlyProductData } from '../infrastructure/interface/product.interface';

export function useSearch(q: SearchQuery) {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<
    AxiosResponse<{
      banners: [];
      data: IKurlyProductData[];
      meta: ISectionMeta;
    }>
  >(['search'], () => api.getSearch(token, q), {
    onSuccess: res => {
      console.log('search', res.data);
    },
    enabled: !!token,
  });

  return { ...result };
}

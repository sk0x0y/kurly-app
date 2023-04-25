import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { FilterType } from '../../infrastructure/interface/filter.interface';
import { ISection } from '../../infrastructure/interface/section.interface';
import { IKurlyCollectionPageMetaData } from '../../infrastructure/interface/collection.interface';

export function useMarketProductMeta(type: FilterType) {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<AxiosResponse<ISection<IKurlyCollectionPageMetaData>>>(
    [`metadata/${type}`],
    () => api.getMarketProductMeta(token, type),
    {
      onSuccess: res => {
        console.log(`metadata/${type}`, res.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

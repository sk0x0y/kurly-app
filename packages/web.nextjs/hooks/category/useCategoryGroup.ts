import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../../api';
import { RootState } from '../../infrastructure/redux';
import { ISectionMeta } from '../../infrastructure/interface/section.interface';
import { IKurlyCategoryGroupData } from '../../infrastructure/interface/category.interface';

export function useCategoryGroup() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<
    AxiosResponse<{
      data: { main: IKurlyCategoryGroupData[]; recommend: IKurlyCategoryGroupData[] };
      meta: ISectionMeta;
    }>
  >(['category/group'], () => api.getCategoryGroup(token), {
    onSuccess: res => {
      console.log('category/group', res.data);
    },
    enabled: !!token,
  });

  return { ...result };
}

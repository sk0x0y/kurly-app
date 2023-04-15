import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as api from '../api';
import { RootState } from '../infrastructure/redux';
import { ISection } from '../infrastructure/interface/section.interface';
import { IRandomCollection } from '../infrastructure/interface/randomCollection.interface';

export function useRandomCollection() {
  const token = useSelector((state: RootState) => state.tokenAdaptor.token);

  const result = useQuery<AxiosResponse<ISection<IRandomCollection>>>(
    ['random-collection'],
    () => api.getRandomCollection(token),
    {
      onSuccess: res => {
        console.log('random-collection', res.data);
      },
      enabled: !!token,
    }
  );

  return { ...result };
}

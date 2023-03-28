import { createSlice } from '@reduxjs/toolkit';
import { BannerLocalEntity } from '../../entities/local/banner.local.entity';

const initialState: BannerLocalEntity = {
  ...new BannerLocalEntity(),
};

const bannerSlice = createSlice({
  initialState,
  name: 'banner',
  reducers: {
    increase: state => {
      state.entity[0].id = 20;
    },
  },
});

export const { actions, reducer } = bannerSlice;

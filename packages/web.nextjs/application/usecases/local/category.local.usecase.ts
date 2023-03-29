import { createSlice } from '@reduxjs/toolkit';
import { CategoryLocalEntity } from '../../entities/local/category.local.entity';

const initialState: CategoryLocalEntity = {
  ...new CategoryLocalEntity(),
};

const categorySlice = createSlice({
  initialState,
  name: 'category',
  reducers: {
    increase: state => {
      state.entity[0].id = 20;
    },
  },
});

export const { actions, reducer } = categorySlice;

import { createSlice } from '@reduxjs/toolkit';
import { ProductLocalEntity } from '../../entities/local/product.local.entity';

const initialState: ProductLocalEntity = {
  ...new ProductLocalEntity(),
};

const productSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {
    increase: state => {
      state.entity[0].id = 20;
    },
  },
});

export const { actions, reducer } = productSlice;

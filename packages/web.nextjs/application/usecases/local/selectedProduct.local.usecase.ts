import { createSlice } from '@reduxjs/toolkit';
import { SelectedProductLocalEntity } from '../../entities/local/selectedProduct.local.entity';

const initialState: SelectedProductLocalEntity = {
  ...new SelectedProductLocalEntity(),
};

const selectedProductSlice = createSlice({
  initialState,
  name: 'selectedProduct',
  reducers: {
    increase: state => {
      state.entity[0].id = 20;
    },
  },
});

export const { actions, reducer } = selectedProductSlice;

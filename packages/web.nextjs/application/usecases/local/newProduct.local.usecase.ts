import { createSlice } from '@reduxjs/toolkit';
import { NewProductLocalEntity } from '../../entities/local/newProduct.local.entity';

const initialState: NewProductLocalEntity = {
  ...new NewProductLocalEntity(),
};

const newProductSlice = createSlice({
  initialState,
  name: 'newProduct',
  reducers: {
    increase: state => {
      state.entity[0].id = 20;
    },
  },
});

export const { actions, reducer } = newProductSlice;

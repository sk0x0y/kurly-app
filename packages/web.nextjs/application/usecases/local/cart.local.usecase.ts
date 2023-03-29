import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartLocalEntity } from '../../entities/local/cart.local.entity';
import { ICart } from '../../../infrastructure/interface/cart.interface';

const initialState: CartLocalEntity = {
  ...new CartLocalEntity(),
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    put: (state, action: PayloadAction<ICart[]>) => {
      const isEmpty = action.payload.length;

      // if (isEmpty) {
      //   window.alert('선택한 상품이 없습니다.');
      // }

      // if (!isEmpty) {
      state.entity = [...state.entity, ...action.payload];
      // }
    },
  },
});

export const { actions, reducer } = cartSlice;

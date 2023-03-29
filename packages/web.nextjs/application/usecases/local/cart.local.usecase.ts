import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartLocalEntity } from '../../entities/local/cart.local.entity';
import { ISelectedProduct } from '../../../infrastructure/interface/selectedProduct.interface';

const initialState: CartLocalEntity = {
  ...new CartLocalEntity(),
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    put: (state, action: PayloadAction<ISelectedProduct[]>) => {
      const isFill = action.payload.length;

      if (!isFill) {
        window.alert('선택한 상품이 없습니다.');
      }

      state.entity = [...state.entity, ...action.payload];
    },
  },
});

export const { actions, reducer } = cartSlice;

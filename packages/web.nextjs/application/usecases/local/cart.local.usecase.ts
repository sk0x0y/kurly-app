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

      action.payload.map(selectedProduct => {
        state.entity.productPrice += selectedProduct.price.original * selectedProduct.count;
        state.entity.deliverFee = 3000;

        if (selectedProduct.price.discount) {
          state.entity.salePrice += selectedProduct.price.discount.price * selectedProduct.count;
        }

        return [];
      });

      state.entity = { ...state.entity, selectedProduct: [...action.payload] };
    },
  },
});

export const { actions, reducer } = cartSlice;

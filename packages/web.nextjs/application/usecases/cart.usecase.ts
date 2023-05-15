import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartEntity } from '../entities/cart.entity';
import { ISelectedProduct } from '../../infrastructure/interface/selectedProduct.interface';

const initialState: CartEntity = {
  ...new CartEntity(),
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
        state.entity.productPrice += selectedProduct.basePrice * selectedProduct.count;
        state.entity.deliverFee = state.entity.productPrice >= 40000 ? 0 : 3000;

        if (selectedProduct.discountedPrice) {
          state.entity.salePrice += selectedProduct.discountedPrice * selectedProduct.count;
        }

        return [];
      });

      state.entity = { ...state.entity, selectedProduct: [...state.entity.selectedProduct, ...action.payload] };
    },
    remove(state, action: PayloadAction<number>) {
      state.entity.selectedProduct = state.entity.selectedProduct.filter(selected => selected.no !== action.payload);
    },
  },
});

export const { actions, reducer } = cartSlice;

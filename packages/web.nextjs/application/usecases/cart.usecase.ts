import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartEntity } from '../entities/cart.entity';
import { ISelectedProduct } from '../../infrastructure/interface/selectedProduct.interface';
import { ICartDetail, ICartProductDetailData } from '../../infrastructure/interface/cart.interface';

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
    putDetail(state, action: PayloadAction<ICartDetail>) {
      state.detail = action.payload;
    },
    select(state, action: PayloadAction<{ entity: ICartProductDetailData; checked: boolean }>) {
      const selectedProduct = state.entity.selectedProduct.filter(
        selected => selected.no === action.payload.entity.dealProductNo
      );

      selectedProduct.map(entity => {
        entity.checked = action.payload.checked;

        return [];
      });
    },
    selectAll(state, action: PayloadAction<boolean>) {
      state.entity.selectedProduct.map(selected => {
        // 전체 선택 체크
        if (action.payload) {
          selected.checked = action.payload;
        }

        // 전체 선택 해제
        if (!action.payload) {
          selected.checked = action.payload;
        }

        return [];
      });
    },
    remove(state, action: PayloadAction<number>) {
      state.entity.selectedProduct = state.entity.selectedProduct.filter(selected => selected.no !== action.payload);
    },
  },
});

export const { actions, reducer } = cartSlice;

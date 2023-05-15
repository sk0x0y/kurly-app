import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedProductEntity } from '../entities/selectedProduct.entity';
import { ISelectedProduct } from '../../infrastructure/interface/selectedProduct.interface';
import { IDealProductData } from '../../infrastructure/interface/product-detail.interface';

const initialState: SelectedProductEntity = {
  ...new SelectedProductEntity(),
};

const selectedProductSlice = createSlice({
  initialState,
  name: 'selectedProduct',
  reducers: {
    select: (state, action: PayloadAction<{ entity: IDealProductData; masterName: string; mainImageUrl: string }>) => {
      const isDuplicated = state.entity.filter(entity => entity.no === action.payload.entity.no).length;

      if (!isDuplicated) {
        state.entity = [
          ...state.entity,
          {
            ...action.payload.entity,
            masterName: action.payload.masterName,
            mainImageUrl: action.payload.mainImageUrl,
            count: 1,
            selected: true,
          },
        ];
      }
    },
    remove: (state, action: PayloadAction<ISelectedProduct>) => {
      state.entity = state.entity.filter(entity => entity.no !== action.payload.no);
    },
    removeAll: state => {
      state.entity = [];
    },
    increase: (state, action: PayloadAction<ISelectedProduct>) => {
      const target = state.entity.filter(entity => entity.no === action.payload.no)[0];

      state.entity.map(entity => {
        if (entity === target) {
          entity.count += 1;
        }

        return [];
      });
    },
    decrease: (state, action: PayloadAction<ISelectedProduct>) => {
      const target = state.entity.filter(entity => entity.no === action.payload.no)[0];

      state.entity.map(entity => {
        if (entity === target) {
          entity.count -= 1;

          if (entity.count <= 0) {
            state.entity = state.entity.filter(item => item.no !== action.payload.no);
          }
        }

        return [];
      });
    },
  },
});

export const { actions, reducer } = selectedProductSlice;

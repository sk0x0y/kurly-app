import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedProductLocalEntity } from '../../entities/local/selectedProduct.local.entity';
import { ISubProduct } from '../../../infrastructure/interface/product.interface';
import { ISelectedProduct } from '../../../infrastructure/interface/selectedProduct.interface';

const initialState: SelectedProductLocalEntity = {
  ...new SelectedProductLocalEntity(),
};

const selectedProductSlice = createSlice({
  initialState,
  name: 'selectedProduct',
  reducers: {
    select: (state, action: PayloadAction<ISubProduct>) => {
      const isDuplicated = state.entity.filter(entity => entity.id === action.payload.id).length;

      if (!isDuplicated) {
        state.entity = [...state.entity, { ...action.payload, count: 1 }];
      }
    },
    remove: (state, action: PayloadAction<ISelectedProduct>) => {
      state.entity = state.entity.filter(entity => entity.id !== action.payload.id);
    },
    increase: (state, action: PayloadAction<ISelectedProduct>) => {
      const target = state.entity.filter(entity => entity.id === action.payload.id)[0];

      state.entity.map(entity => {
        if (entity === target) {
          entity.count += 1;
        }

        return [];
      });
    },
    decrease: (state, action: PayloadAction<ISelectedProduct>) => {
      const target = state.entity.filter(entity => entity.id === action.payload.id)[0];

      state.entity.map(entity => {
        if (entity === target) {
          entity.count -= 1;

          if (entity.count <= 0) {
            state.entity = state.entity.filter(item => item.id !== action.payload.id);
          }
        }

        return [];
      });
    },
  },
});

export const { actions, reducer } = selectedProductSlice;

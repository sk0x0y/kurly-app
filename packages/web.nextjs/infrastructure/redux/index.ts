import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { reducer as categoryReducer } from '../../application/usecases/local/category.local.usecase';
import { reducer as productReducer } from '../../application/usecases/local/product.local.usecase';
import { reducer as selectedProductReducer } from '../../application/usecases/local/selectedProduct.local.usecase';
import { reducer as newProductReducer } from '../../application/usecases/local/newProduct.local.usecase';
import { reducer as specialDealReducer } from '../../application/usecases/local/specialDeal.local.usecase';
import { reducer as bannerReducer } from '../../application/usecases/local/banner.local.usecase';
import { SelectedProductLocalEntity } from '../../application/entities/local/selectedProduct.local.entity';
import { ProductLocalEntity } from '../../application/entities/local/product.local.entity';
import { NewProductLocalEntity } from '../../application/entities/local/newProduct.local.entity';
import { SpecialDealLocalEntity } from '../../application/entities/local/specialDeal.local.entity';
import { CategoryLocalEntity } from '../../application/entities/local/category.local.entity';
import { BannerLocalEntity } from '../../application/entities/local/banner.local.entity';

interface ReducerState {
  categoryAdaptor: CategoryLocalEntity;
  productAdaptor: ProductLocalEntity;
  newProductAdaptor: NewProductLocalEntity;
  specialDealAdaptor: SpecialDealLocalEntity;
  selectedProductAdaptor: SelectedProductLocalEntity;
  bannerAdaptor: BannerLocalEntity;
}

// NOTE: https://velog.io/@1-blue/Next.js-TypeScript-Redux-Toolkit-Redux-Saga%EC%A0%81%EC%9A%A9
export const rootReducer = (state: any, action: AnyAction): CombinedState<ReducerState> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return combineReducers({
        categoryAdaptor: categoryReducer,
        productAdaptor: productReducer,
        newProductAdaptor: newProductReducer,
        specialDealAdaptor: specialDealReducer,
        selectedProductAdaptor: selectedProductReducer,
        bannerAdaptor: bannerReducer,
      })(state, action);
  }
};
export type RootState = ReturnType<typeof rootReducer>;

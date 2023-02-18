import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IStore } from '../../interface/store.interface';
import { ProductLocalAdaptor } from '../../adaptor/local/product.local.adaptor';
import { ProductLocalInteractor } from '../../interactor/local/product.local.interactor';
import { ProductLocalEntity } from '../../../application/entities/local/product.local.entity';

export interface IProductLocalSlice<T, U> {
  productLocal: IStore<T, U>;
}

const { productLocalInteractor: dispatch } = ProductLocalAdaptor;

export const store = () => ({
  productLocal: { dispatch, ...new ProductLocalEntity() },
});

const useEntityStore = create<IProductLocalSlice<ProductLocalInteractor, typeof ProductLocalEntity.prototype.entity>>()(
  devtools(store)
);

export const useLocalProductEntity = () => useEntityStore(state => state.productLocal.entity);
export const useLocalProductDispatch = () => useEntityStore(state => state.productLocal.dispatch);

export default {
  useLocalProductEntity,
  useLocalProductDispatch,
};

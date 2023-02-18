import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IStore } from '../../interface/store.interface';
import { CategoryLocalAdaptor } from '../../adaptor/local/category.local.adaptor';
import { CategoryLocalInteractor } from '../../interactor/local/category.local.interactor';
import { CategoryLocalEntity } from '../../../application/entities/local/category.local.entity';

export interface ICategoryLocalSlice<T, U> {
  categoryLocal: IStore<T, U>;
}

const { categoryLocalInteractor: dispatch } = CategoryLocalAdaptor;

export const store = () => ({
  categoryLocal: { dispatch, ...new CategoryLocalEntity() },
});

const useEntityStore = create<
  ICategoryLocalSlice<CategoryLocalInteractor, typeof CategoryLocalEntity.prototype.entity>
>()(devtools(store));

export const useLocalCategoryEntity = () => useEntityStore(state => state.categoryLocal.entity);
export const useLocalCategoryDispatch = () => useEntityStore(state => state.categoryLocal.dispatch);

export default {
  useLocalCategoryEntity,
  useLocalCategoryDispatch,
};

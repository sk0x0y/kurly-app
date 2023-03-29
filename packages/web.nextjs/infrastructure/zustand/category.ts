// import { create } from 'zustand';
// import { IStore } from '../interface/store.interface';
// import { CategoryAdaptor } from '../adaptor/category.adaptor';
// import { CategoryInteractor } from '../interactor/category.interactor';
import { CategoryEntity } from '../../application/entities/category.entity';

// export interface ICategorySlice<T, U> {
//   category: IStore<T, U>;
// }
// export type CategorySlice = ICategorySlice<CategoryInteractor, CategoryEntity[]>['category'];

// const { categoryInteractor: dispatch } = CategoryAdaptor;

// export const store = () => ({
// category: { dispatch, entity: [] as CategoryEntity[] },
// });

// const useCategoryEntityStore = create<ICategorySlice<CategoryInteractor, CategoryEntity[]>>()(store);

// export const useCategoryEntity = () => useCategoryEntityStore(state => state.category.entity);
// export const useCategoryDispatch = () => useCategoryEntityStore(state => state.category.dispatch);

// export default {
//   useCategoryEntity,
//   useCategoryDispatch,
// };

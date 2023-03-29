import { create } from 'zustand';
// import { IStore } from '../../interface/store.interface';
// import { CategoryLocalAdaptor } from '../../adaptor/local/category.local.adaptor';
// import { CategoryLocalInteractor } from '../../interactor/local/category.local.interactor';
// import { CategoryLocalEntity } from '../../../application/entities/local/category.local.entity';
//
// export interface ICategoryLocalSlice<T, U> {
//   categoryLocal: IStore<T, U>;
// }
// export type CategoryLocalSlice = ICategoryLocalSlice<
//   CategoryLocalInteractor,
//   typeof CategoryLocalEntity.prototype.entity
// >['categoryLocal'];
//
// const { categoryLocalInteractor: dispatch } = CategoryLocalAdaptor;
//
// export const store = () => ({
//   categoryLocal: { dispatch, ...new CategoryLocalEntity() },
// });
//
// const useEntityStore =
//   create<ICategoryLocalSlice<CategoryLocalInteractor, typeof CategoryLocalEntity.prototype.entity>>()(store);
//
// export const useLocalCategoryEntity = () => useEntityStore(state => state.categoryLocal.entity);
// export const useLocalCategoryDispatch = () => useEntityStore(state => state.categoryLocal.dispatch);
//
// export default {
//   useLocalCategoryEntity,
//   useLocalCategoryDispatch,
// };

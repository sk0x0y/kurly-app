import { create } from 'zustand';
// import { IPureStore } from '../../interface/store.interface';
// import { NewProductLocalEntity } from '../../../application/entities/local/newProduct.local.entity';
//
// export interface INewProductLocalSlice<T> {
//   newProductLocal: IPureStore<T>;
// }
// export type NewProductLocalSlice = INewProductLocalSlice<
//   typeof NewProductLocalEntity.prototype.entity
// >['newProductLocal'];
//
// export const store = () => ({
//   newProductLocal: { ...new NewProductLocalEntity() },
// });
//
// const useEntityStore = create<INewProductLocalSlice<typeof NewProductLocalEntity.prototype.entity>>()(store);
//
// export const useLocalNewProductEntity = () => useEntityStore(state => state.newProductLocal.entity);
//
// export default {
//   useLocalNewProductEntity,
// };

import { create } from 'zustand';
// import { IPureStore } from '../../interface/store.interface';
// import { SpecialDealLocalEntity } from '../../../application/entities/local/specialDeal.local.entity';
//
// export interface ISpecialDealLocalSlice<T> {
//   specialDealLocal: IPureStore<T>;
// }
// export type SpecialDealLocalSlice = ISpecialDealLocalSlice<
//   typeof SpecialDealLocalEntity.prototype.entity
// >['specialDealLocal'];
//
// export const store = () => ({
//   specialDealLocal: { ...new SpecialDealLocalEntity() },
// });
//
// const useEntityStore = create<ISpecialDealLocalSlice<typeof SpecialDealLocalEntity.prototype.entity>>()(store);
//
// export const useLocalSpecialDealEntity = () => useEntityStore(state => state.specialDealLocal.entity);
//
// export default {
//   useLocalSpecialDealEntity,
// };

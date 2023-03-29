import { create } from 'zustand';
// import { IPureStore } from '../../interface/store.interface';
// import { BannerLocalEntity } from '../../../application/entities/local/banner.local.entity';
//
// export interface IBannerLocalSlice<T> {
//   bannerLocal: IPureStore<T>;
// }
// export type BannerLocalSlice = IBannerLocalSlice<typeof BannerLocalEntity.prototype.entity>['bannerLocal'];
//
// export const store = () => ({
//   bannerLocal: { ...new BannerLocalEntity() },
// });
//
// const useEntityStore = create<IBannerLocalSlice<typeof BannerLocalEntity.prototype.entity>>()(store);
//
// export const useLocalBannerEntity = () => useEntityStore(state => state.bannerLocal.entity);
//
// export default {
//   useLocalBannerEntity,
// };

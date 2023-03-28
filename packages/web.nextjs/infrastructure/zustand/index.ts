// Clean Architecture
// https://github.com/falsy/react-with-clean-architecture/blob/main/readme-ko.md
// https://woong-jae.com/projects/220818-clean-architecture-refactoring

// DAO, DTO, VO, Entity
// https://velog.io/@leyuri/DAO%EC%99%80-Repository-DTO-VO
// https://tecoble.techcourse.co.kr/post/2021-05-16-dto-vs-vo-vs-entity/

// Zustand
// https://itchallenger.tistory.com/814
// https://itchallenger.tistory.com/606s

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CategoryLocalSlice, store as categoryLocalSlice } from './local/category.local';
import { CategorySlice, store as categorySlice } from './category';
import { ProductLocalSlice, store as productLocalSlice } from './local/product.local';
import {
  MerchandiserChoiceCategoryLocalSlice,
  store as merchandiserChoiceCategoryLocalSlice,
} from './local/merchandiserChoiceCategory.local';
import { BannerLocalSlice, store as bannerLocalSlice } from './local/banner.local';
import { SpecialDealLocalSlice, store as specialDealLocalSlice } from './local/specialDeal.local';
import { NewProductLocalSlice, store as newProductLocalSlice } from './local/newProduct.local';

// export const useGlobalStore = create<{
//   categoryLocal: CategoryLocalSlice;
//   category: CategorySlice;
//   productLocal: ProductLocalSlice;
//   merchandiserChoiceCategoryLocal: MerchandiserChoiceCategoryLocalSlice;
//   bannerLocal: BannerLocalSlice;
//   specialDealLocal: SpecialDealLocalSlice;
//   newProductLocal: NewProductLocalSlice;
// }>()(
//   devtools(() => ({
//     ...categoryLocalSlice(),
//     ...categorySlice(),
//     ...productLocalSlice(),
//     ...merchandiserChoiceCategoryLocalSlice(),
//     ...bannerLocalSlice(),
//     ...specialDealLocalSlice(),
//     ...newProductLocalSlice(),
//   }))
// );

export { useLocalCategoryEntity, useLocalCategoryDispatch } from './local/category.local';
export { useCategoryEntity, useCategoryDispatch } from './category';
export { useLocalProductEntity, useLocalProductDispatch } from './local/product.local';
export {
  useLocalMerchandiserChoiceCategoryEntity,
  useLocalMerchandiserChoiceCategoryDispatch,
} from './local/merchandiserChoiceCategory.local';
export { useLocalBannerEntity } from './local/banner.local';
export { useLocalSpecialDealEntity } from './local/specialDeal.local';
export { useLocalNewProductEntity } from './local/newProduct.local';

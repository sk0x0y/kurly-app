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
import { store as categoryLocalSlice } from './local/category.local';
import { store as categorySlice } from './category';
import { store as productLocalSlice } from './local/product.local';

export const useGlobalStore = create()(() => ({
  ...categoryLocalSlice(),
  ...categorySlice(),
  ...productLocalSlice(),
}));

export { useLocalCategoryEntity, useLocalCategoryDispatch } from './local/category.local';
export { useCategoryEntity, useCategoryDispatch } from './category';
export { useLocalProductEntity, useLocalProductDispatch } from './local/product.local';
export {
  useLocalMerchandiserChoiceCategoryEntity,
  useLocalMerchandiserChoiceCategoryDispatch,
} from './local/merchandiserChoiceCategory.local';

// export * from './local/category.local';
// export * from './category';

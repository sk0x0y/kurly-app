import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IStore } from '../../interface/store.interface';
import { MerchandiserChoiceCategoryLocalAdaptor } from '../../adaptor/local/merchandiserChoiceCategory.local.adaptor';
import { MerchandiserChoiceCategoryLocalInteractor } from '../../interactor/local/merchandiserChoiceCategory.local.interactor';
import { MerchandiserChoiceCategoryLocalEntity } from '../../../application/entities/local/merchandiserChoiceCategory.local.entity';

export interface IMerchandiserChoiceCategoryLocalSlice<T, U> {
  merchandiserChoiceCategoryLocal: IStore<T, U>;
}

const { merchandiserChoiceCategoryLocalInteractor: dispatch } = MerchandiserChoiceCategoryLocalAdaptor;

export const store = () => ({
  merchandiserChoiceCategoryLocal: { dispatch, ...new MerchandiserChoiceCategoryLocalEntity() },
});

const useEntityStore = create<
  IMerchandiserChoiceCategoryLocalSlice<
    MerchandiserChoiceCategoryLocalInteractor,
    typeof MerchandiserChoiceCategoryLocalEntity.prototype.entity
  >
>()(devtools(store));

export const useLocalMerchandiserChoiceCategoryEntity = () =>
  useEntityStore(state => state.merchandiserChoiceCategoryLocal.entity);
export const useLocalMerchandiserChoiceCategoryDispatch = () =>
  useEntityStore(state => state.merchandiserChoiceCategoryLocal.dispatch);

export default {
  useLocalMerchandiserChoiceCategoryEntity,
  useLocalMerchandiserChoiceCategoryDispatch,
};

import { createSlice } from '@reduxjs/toolkit';
import { MerchandiserChoiceCategoryLocalEntity } from '../../entities/local/merchandiserChoiceCategory.local.entity';

const initialState: MerchandiserChoiceCategoryLocalEntity = {
  ...new MerchandiserChoiceCategoryLocalEntity(),
};

const merchandiserChoiceCategorySlice = createSlice({
  initialState,
  name: 'merchandiserChoiceCategory',
  reducers: {},
});

export const { actions, reducer } = merchandiserChoiceCategorySlice;

import { createSlice } from '@reduxjs/toolkit';
import { SpecialDealLocalEntity } from '../../entities/local/specialDeal.local.entity';

const initialState: SpecialDealLocalEntity = {
  ...new SpecialDealLocalEntity(),
};

const specialDealSlice = createSlice({
  initialState,
  name: 'specialDeal',
  reducers: {},
});

export const { actions, reducer } = specialDealSlice;

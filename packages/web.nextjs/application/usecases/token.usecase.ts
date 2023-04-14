import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokenEntity } from '../entities/token.entity';

const initialState: TokenEntity = {
  ...new TokenEntity(),
};

const tokenSlice = createSlice({
  initialState,
  name: 'token',
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { actions, reducer } = tokenSlice;

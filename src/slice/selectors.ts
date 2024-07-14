import { createSelector } from '@reduxjs/toolkit';

import { initialState } from '.';
import { RootState } from '../types/RootState';

const selectSlice = (state: RootState) => state?.app ?? initialState;

export const selectBrandDescription = createSelector(
  [selectSlice],
  state => state.brandDescription,
);

export const selectSelectedAvatar = createSelector(
  [selectSlice],
  state => state.selectedAvatar,
);

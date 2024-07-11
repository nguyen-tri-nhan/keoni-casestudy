import { PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './types';
import { BrandDescriptionValue } from '../utils/constant';
import { createSlice } from '../utils/@reduxjs/custom-toolkit';
import { useInjectReducer } from 'redux-injectors';

export const initialState: AppState = {
  brandDescription: BrandDescriptionValue.KEONI_DESCRIBE,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setBrandDescription(state, action: PayloadAction<BrandDescriptionValue>) {
      state.brandDescription = action.payload;
    },
  },
});

export const { actions: appActions } = slice;
export const { reducer: appReducer } = slice;

export const useAppSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useProjectSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

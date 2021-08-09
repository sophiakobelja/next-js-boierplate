import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../index';

export interface ICounterSlice {
  count: number;
}

const CounterSlice = createSlice({
  name: 'CounterSlice',
  initialState: {
    count: 0,
  },
  reducers: {
    // insert reducers
    setCount: (state: ICounterSlice, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const setCountAsync =
  (newCount: number): AppThunk =>
  async (dispatch) => {
    dispatch(setCount(newCount));
  };

// actions
export const { setCount } = CounterSlice.actions;

// reducers
export default CounterSlice.reducer;

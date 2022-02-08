import { createSlice } from '@reduxjs/toolkit';
import { dummyMeal } from '../../data/dummy-data';

export const totalSlice = createSlice({
  name: 'meals',
  initialState: {
    value: dummyMeal,
  },
  reducers: {
    total: (state) => {
      return state.value
    },
  },
})

export const { total } = totalSlice.actions

export default totalSlice.reducer
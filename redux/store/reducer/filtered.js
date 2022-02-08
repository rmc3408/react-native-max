import { createSlice } from '@reduxjs/toolkit';
import { dummyMeal } from '../../data/dummy-data';

export const filteredSlice = createSlice({
  name: 'filteredMeals',
  initialState: {
    value: dummyMeal,
  },
  reducers: {
    total: (state) => {
      return state.value
    },
  },
})

export const { total } = filteredSlice.actions

export default filteredSlice.reducer
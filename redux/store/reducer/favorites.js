import { createSlice } from '@reduxjs/toolkit';

export const favSlice = createSlice({
  name: 'favMeals',
  initialState: {
    value: [],
  },
  reducers: {
    total: (state) => {
      return state.value
    },
  },
})

export const { total } = favSlice.actions

export default favSlice.reducer
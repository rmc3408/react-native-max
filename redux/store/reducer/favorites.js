import { createSlice } from '@reduxjs/toolkit';
import { dummyMeal } from '../../data/dummy-data';

export const favSlice = createSlice({
    name: 'favMeals',
    initialState: {
        value: [],
    },
    reducers: {
        toogleFav: (state, action) => {
            const exist = state.value.findIndex((meal) => meal.id === action.payload);
            if (exist >= 0) {
              const updatedFavMeals = [ ...state.value ];
              updatedFavMeals.splice(exist, 1);
              return { value: [ ...updatedFavMeals ] };
            } else {
              const firstTimeFav = dummyMeal.find((meal) => meal.id === action.payload);
              return { value: [ ...state.value, firstTimeFav ] };
            }
        },
    },
});

export const { toogleFav } = favSlice.actions;

export default favSlice.reducer;

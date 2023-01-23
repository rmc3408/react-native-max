import { createSlice } from '@reduxjs/toolkit';
import { dummyMeal } from '../../data/dummy-data';

export const filteredSlice = createSlice({
  name: 'filteredMeals',
  initialState: {
    value: dummyMeal,
  },
  reducers: {
    setFilter: (state, action) => {
      const appliedF = action.payload;
      
      const filteredMeals = dummyMeal.filter((meal) => {
        if (appliedF.gluten && !meal.isGlutenFree) return false;
        if (appliedF.lactose && !meal.isLactoseFree) return false;
        if (appliedF.vegan && !meal.isVegan) return false;
        if (appliedF.veggie && !meal.isVegetarian) return false;
        return true;
      });
      //console.log(filteredMeals.length);
      return { value: [ ...filteredMeals] }; 
    },
  },
})

export const { setFilter } = filteredSlice.actions

export default filteredSlice.reducer
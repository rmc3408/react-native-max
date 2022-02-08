import { configureStore } from '@reduxjs/toolkit';
import mealTotalReducer from './reducer/total';
import mealFavReducer from'./reducer/favorites';
import mealFilteredReducer from './reducer/filtered';


export default configureStore({
  reducer: {
    meals: mealTotalReducer,
    favMeals: mealFavReducer,
    filteredMeals: mealFilteredReducer,
  },
})
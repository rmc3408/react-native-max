import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';
import { useDispatch, useSelector } from 'react-redux';
import { toogleFav } from '../store/reducer/favorites';

const HeaderBtn = (props) => {
    const dispatch = useDispatch();
    const isFavorited = useSelector(state => state.favMeals.value.some(meal => meal.id === props.id))

    return <Ionicons 
      name={isFavorited ? "ios-star" : "ios-star-outline"} 
      size={24} color="white" onPress={() => dispatch(toogleFav(props.id))} />;
};

export default HeaderBtn;

import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';

const HeaderBtn = (props) => {
  return <Ionicons name="ios-star" size={22} color='white' onPress={()=> {
      console.log('CLICK');
  }} />
};

export default HeaderBtn;


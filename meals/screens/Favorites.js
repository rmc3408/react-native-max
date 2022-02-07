import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MealList from '../components/MealList';
import { dummyMeal } from '../data/dummy-data';
import defStyles from '../defStyles';

const Favorites = (props) => {
  const selectedFav = dummyMeal.filter(m => m.id === 'm1' ||  m.id === 'm2');

  return (
    <View style={defStyles.container}>
      <MealList listData={selectedFav} navigation={props.navigation} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});

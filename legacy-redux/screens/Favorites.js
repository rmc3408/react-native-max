import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import MealList from '../components/MealList';
import defStyles from '../defStyles';
import { useSelector } from 'react-redux'

const Favorites = (props) => {
  const favorites = useSelector((state) => state.favMeals.value);

  if (favorites.length === 0 || !favorites) {
    return (
      <View style={defStyles.empty}>
        <Text style={defStyles.text}>NO FAVORITES</Text>
      </View>
    );
  }

  return (
    <View style={defStyles.container}>
      <MealList listData={favorites} navigation={props.navigation} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});

import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import defStyles from '../defStyles';

const Categories = (props) => {
  return (
    <View style={defStyles.container}>
      <Text style={defStyles.title}>CATEGORIES</Text>
      <Button title='Go to category' onPress={()=> props.navigation.navigate('Category')} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});

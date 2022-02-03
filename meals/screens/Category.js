import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import defStyles from '../defStyles';


const Category = (props) => {
  return (
    <View style={defStyles.container}>
      <Text style={defStyles.title}>CATEGORY</Text>
      <Button title='Go to meals details' onPress={()=> props.navigation.navigate('Details')} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});

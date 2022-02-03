import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import defStyles from '../defStyles';
import { dummy } from '../data/dummy-data';


const Category = (props) => {
  const { categoryId } = props.route.params;
  const selectedCat = dummy.find((item) => item.id === categoryId );

  useLayoutEffect(() => {
    props.navigation.setOptions({ title: selectedCat.title })
  }, []);
  
  return (
    <View style={defStyles.container}>
      <Text style={defStyles.title}>{selectedCat.title}</Text>
      <Button title='Go to meals details' onPress={()=> props.navigation.navigate('Details')} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});

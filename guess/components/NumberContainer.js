import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import color from '../constant/color';

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: color.secondary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: color.secondary,
        fontSize: 18
    }
});

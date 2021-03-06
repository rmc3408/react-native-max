import { StyleSheet, View } from 'react-native';
import React from 'react';
import color from '../constant/color';

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.cardStyle}}>
      {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        padding: 20,
        shadowColor: color.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.26,
        shadowRadius: 5,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: color.white,
      },
});

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const deviceH = Dimensions.get('window').height;

const Guess = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.numberText}>{props.guess}</Text>
      </View>
    </View>
  );
};

export default Guess;

const styles = StyleSheet.create({
  screen: {
    //flex: 2/4,
    height: deviceH > 800 ? 300 : 150,
    marginTop: deviceH > 800 ? 30 : 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: 'yellow',
    borderRadius: 8,
    aspectRatio: 1/1,  
  },
  numberText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});

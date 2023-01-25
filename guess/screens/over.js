import { StyleSheet, Image, View, Text } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import PrimartBtn from '../components/PrimaryBtn';

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Title styled={styles.title}>Ending</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          alt="end"
          transition
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.summary}>
          <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess number{' '}
          <Text style={styles.highlight}>{props.userChoice}</Text>
        </Text>
      </View>
      <PrimartBtn onPressing={props.onStartOver}>Start New Game</PrimartBtn>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'stretch',
    letterSpacing: 8,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summary: {
    fontFamily: 'open-sans',
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 24,
  },
  highlight: {
    fontFamily: 'monospace',
    fontWeight: '800',
  },
});

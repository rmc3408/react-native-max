import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Card from '../components/Card.js';

const Start = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card cardStyle={styles.cardContainer}>
        <Text>Select a number</Text>
        <TextInput style={styles.input} />
        <View style={styles.btnContainer}>
          <Button title='Start'/>
          <Button title='Reset'/>
        </View>
      </Card>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  cardContainer: {
    alignItems: 'center',
    width: 300,
    maxWidth: '80%',
  },
  input: {
    width: 80,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  btnContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

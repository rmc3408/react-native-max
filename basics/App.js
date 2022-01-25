import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [listGoal, setListGoal] = useState([]);

  const handleInputTxt = (value) => {
    setGoal(value);
  };

  const handleInputList = () => {
    setListGoal(curList => [...curList, goal]);
  };

  return (
    <View style={styles.section}>
      <View style={styles.box}>
        <TextInput placeholder='Course goal here' style={styles.ti} onChangeText={handleInputTxt} value={goal} />
        <Button title="Add" onPress={handleInputList}/>
      </View>
      <View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 50,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ti: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10
  }
});

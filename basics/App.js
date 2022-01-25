import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('Mail');
  return (
    <View style={styles.section}>
      <View style={styles.box}>
        <TextInput placeholder='Course goal here' style={styles.ti} />
        <Button title="Add" />
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

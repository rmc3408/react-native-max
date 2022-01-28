import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header.js';
import Run from './screens/Run.js';
import Start from './screens/Start.js';

export default function App() {
  const [userNum, setUserNum ] = useState();

  const runStartedGame = (value) => {
    setUserNum(value);
  };

  return (
    <View style={styles.screenHeader}>
      <Header title='Guess a number' />
      {userNum ? <Run userChoice={userNum} /> : <Start run={runStartedGame}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  screenHeader: {
    flex: 1,
  }
});

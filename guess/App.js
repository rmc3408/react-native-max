import { StyleSheet, View } from 'react-native';
import Header from './components/Header.js';

export default function App() {
  return (
    <View style={styles.screenHeader}>
      <Header title='Guess a number' />
    </View>
  );
}

const styles = StyleSheet.create({
  screenHeader: {
    flex: 1,
  }
});

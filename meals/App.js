import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Categories from './screen/Categories';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Categories />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

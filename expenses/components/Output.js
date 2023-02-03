import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors';
import ListExpenses from './ListExpenses';
import Summary from './Summary';

const dummyData = [
  { id: 'e1', description: 'shoes', amount: 54.45, createdAt: new Date('2022-12-19').toISOString() },
  { id: 'e2', description: 'Food', amount: 30.97, createdAt: new Date('2022-12-18').toISOString() },
  { id: 'e3', description: 'Pants', amount: 89.99, createdAt: new Date('2022-12-26').toISOString() },
  { id: 'e4', description: 'movies', amount: 19.99, createdAt: new Date('2022-12-30').toISOString() },
  { id: 'e5', description: 'rent', amount: 1059.99, createdAt: new Date('2022-12-31').toISOString() },
  { id: 'e6', description: 'water', amount: 1.99, createdAt: new Date('2023-01-02').toISOString() },
];

const Output = (props) => {
  return (
    <View style={styles.container}>
      <Summary period={props.time} expenses={dummyData} />
      <View style={styles.content}>
        <ListExpenses expenses={dummyData} />
      </View>
    </View>
  );
};

export default Output;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.primary700,
  },
  content: {
    padding: 24,
  },
});

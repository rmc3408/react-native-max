import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors';
import ListExpenses from './ListExpenses';
import Summary from './Summary';

const Output = (props) => {
  return (
    <View style={styles.container}>
      <Summary period={props.time} expenses={props.expenses} />
      <View style={styles.content}>
        <ListExpenses expenses={props.expenses} />
      </View>
    </View>
  );
};

export default Output;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    //backgroundColor: colors.primary700,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

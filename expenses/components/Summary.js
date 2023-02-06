import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const Summary = (props) => {
  const sum = props.expenses.reduce((prevSum, currValue) => prevSum + currValue.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{typeof props.period === 'number' ? `Last ${props.period} days` : 'Total'}</Text>
      <Text style={styles.sum}>${sum.toFixed(2)}</Text>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: colors.primary50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 16,
    color: colors.primary500,
  },
  sum: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary500,
  }
});

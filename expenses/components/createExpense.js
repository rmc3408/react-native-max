import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors';
import ExpenseForm from './ExpenseForm';

const CreateExpense = () => {

  return (
    <View style={styles.container}>
      <ExpenseForm />
    </View>
  );
};

export default CreateExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: colors.primary200,
    alignItems: 'center',
  },
});

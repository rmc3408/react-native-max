import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExpensesContext } from '../store/context';
import colors from '../styles/colors';
import ExpenseForm from './ExpenseForm';
import { IconButton } from './IconButton';

function EditExpense(props) {
  const { id } = props;
  const nav = useNavigation();
  const ctx = useContext(ExpensesContext);

  function deleteExpenseHandler() {
    ctx.deleteExpense(id)
    nav.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm id={id} />
      <View style={styles.deleteContainer}>
        <IconButton iconName="trash" size={48} color={colors.error500} onPress={deleteExpenseHandler} />
      </View>
    </View>
  );
}

export default EditExpense;

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
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

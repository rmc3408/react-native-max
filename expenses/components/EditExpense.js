import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ExpensesContext } from '../store/context';
import colors from '../styles/colors';
import { IconButton } from './IconButton';

function EditExpense(props) {
  const { id, description, amount, createdAt } = props;
  const nav = useNavigation();
  const ctx = useContext(ExpensesContext);

  function deleteExpenseHandler() {
    ctx.deleteExpense(id)
    nav.goBack();
  }

  function cancelHandler() {
    nav.goBack();
  }

  function updateHandler() {
    ctx.updateExpense(id, { description: 'FuckWater', amount: 50, createdAt: new Date() })
    nav.goBack();
  }


  return (
    <View style={styles.container}>
      <View style={styles.btnGroup}>
        <IconButton iconName="thumbs-up-outline" size={36} color={colors.primary100} onPress={updateHandler} />
        <IconButton iconName="thumbs-down-outline" size={36} color={colors.primary100} onPress={cancelHandler} />
      </View>
      <View style={styles.deleteContainer}>
        <IconButton iconName="trash" size={36} color={colors.error500} onPress={deleteExpenseHandler} />
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

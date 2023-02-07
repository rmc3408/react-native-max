import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors';
import ExpenseForm from './ExpenseForm';


function EditExpense(props) {
  const { id } = props;

  return <View style={styles.container}><ExpenseForm id={id} /></View>
}

export default EditExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.primary800,
  },
});

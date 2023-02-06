import { useContext } from 'react';
import { StyleSheet, View } from 'react-native'
import Output from '../components/Output'
import { ExpensesContext } from '../store/context';

const AllExpenses = () => {
  const ctx = useContext(ExpensesContext);

  return <Output time={"total"} expenses={ctx.expenses} />
}

export default AllExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
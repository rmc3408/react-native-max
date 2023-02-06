import { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Output from '../components/Output'
import { ExpensesContext } from '../store/context';
import { filteringDate } from '../Utils/functions';

const RecentExpenses = () => {
  const DAYS_AGO = 40;
  const ctx = useContext(ExpensesContext);

  const recentListExpenses = ctx.expenses.filter(item => filteringDate(item, DAYS_AGO))  

  return <Output expenses={recentListExpenses} time={DAYS_AGO} />
}

export default RecentExpenses

const styles = StyleSheet.create({

})
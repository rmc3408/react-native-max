import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native'
import LoadingSpinner from '../components/loading';
import Output from '../components/Output'
import { ExpensesContext } from '../store/context';
import { getFirebase } from '../Utils/http';


const AllExpenses = () => {
  const [isFetching, setIsFetching ] = useState(true);
  const ctx = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchFromFirebase() {
      getFirebase()
        .then(data => ctx.setExpenses(data))
        .catch(err => setIsFetching(true));
      ;
      setIsFetching(false);
    }
    fetchFromFirebase()
  }, [])
  
  if (isFetching) return <LoadingSpinner />
  return <Output time={"total"} expenses={ctx.expenses} />
}

export default AllExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
import { StyleSheet } from 'react-native';
import CreateExpense from '../components/createExpense';
import EditExpense from '../components/EditExpense';

const ManageExpense = (props) => {
  const { id } = props.route.params;

  if (!id) return <CreateExpense />;

  return <EditExpense {...props.route.params} />;
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

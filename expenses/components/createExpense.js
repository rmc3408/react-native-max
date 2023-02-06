import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import colors from '../styles/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { ExpensesContext } from '../store/context';

const CreateExpense = () => {
  const nav = useNavigation();
  const ctx = useContext(ExpensesContext);

  function cancelHandler() {
    nav.goBack();
  }

  function saveExpenseHandler() {
    ctx.addExpense({ description: 'Condoms', amount: 10, createdAt: new Date() })
    nav.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.btnGroup}>
        <FontAwesome5 name='window-close' color='white' size={48} onPress={cancelHandler} />
        <FontAwesome5 name='save' color='white' size={48} onPress={saveExpenseHandler} />
      </View>
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
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

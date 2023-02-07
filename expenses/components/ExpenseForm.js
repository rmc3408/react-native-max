import { StyleSheet, View, Text, Alert } from 'react-native';
import Input from './Input';
import colors from '../styles/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ExpensesContext } from '../store/context';
import { expenseInputsValidator } from '../Utils/functions';

let formData = {
  amount: { value: '', valid: false },
  description: { value: '', valid: false },
  createdAt: { value: '', valid: false },
};

const ExpenseForm = ({ id }) => {
  const nav = useNavigation();
  const ctx = useContext(ExpensesContext);

  if (id) {
    const foundExpense = ctx.expenses.find((expense) => expense.id === id);
    formData = {
      amount: { value: foundExpense.amount.toString(), valid: true },
      description: { value: foundExpense.description, valid: true },
      createdAt: { value: new Date(foundExpense.createdAt).toISOString().slice(0, 10), valid: true },
    };
  }
  const [inputValue, setInputValue] = useState(formData);

  function cancelHandler() {
    nav.goBack();
  }

  function saveExpenseHandler() {
    if (Object.values(inputValue).some((item) => item.valid === false)) {
      Alert.alert('Invalid Input', 'Please, check inputs');
      return;
    }

    const inputConvertedToSave = {
      description: inputValue.description.value,
      amount: parseFloat(inputValue.amount.value),
      createdAt: new Date(inputValue.createdAt.value),
    };

    if (!id) {
      ctx.addExpense(inputConvertedToSave);
    } else {
      ctx.updateExpense(id, inputConvertedToSave);
    }

    nav.goBack();
  }

  function inputChangeHandler(type, value) {
    const inputValidated = expenseInputsValidator(type, value);

    setInputValue((prevSt) => ({
      ...prevSt,
      [type]: { value: value, valid: inputValidated },
    }));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.dateAmountContainer}>
        <Input
          label="Amount"
          keyboardType="decimal-pad"
          isValid={inputValue.amount.valid}
          onChangeText={inputChangeHandler.bind(this, 'amount')}
          style={styles.item}
          value={inputValue.amount.value}
        />
        <Input
          label="Date"
          placeholder="YYYY-MM-DD"
          maxLength={10}
          isValid={inputValue.createdAt.valid}
          onChangeText={inputChangeHandler.bind(this, 'createdAt')}
          style={styles.item}
          value={inputValue.createdAt.value}
        />
      </View>
      <Input
        label="Description"
        multiLine
        autoCorrect={false}
        isValid={inputValue.description.valid}
        onChangeText={inputChangeHandler.bind(this, 'description')}
        value={inputValue.description.value}
      />
      <View style={styles.btnGroup}>
        <FontAwesome5 name="window-close" color="white" size={48} onPress={cancelHandler} />
        <FontAwesome5 name="save" color="white" size={48} onPress={saveExpenseHandler} />
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  dateAmountContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  item: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: colors.white,
  },
  btnGroup: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

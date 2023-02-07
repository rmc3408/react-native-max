import { createContext, useReducer } from 'react';
import { dummyData } from './data';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function reducersExpenses(state, action) {
  switch (action.type) {
    case 'ADD':
      //const newID = Math.random().toFixed(8);
      return [...state, action.payload ];
    case 'SET':
      return [...action.payload];
    case 'UPDATE':
      const updatableIndexItem = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableItem = state[updatableIndexItem];
      const updatedItem = { ...updatableItem, ...action.payload.data };
      const updatableList = [...state];
      updatableList[updatableIndexItem] = updatedItem;
      return updatableList;
    case 'DELETE':
      const newRemovedList = state.filter((expense) => expense.id !== action.payload);
      return newRemovedList;
    default:
      return state;
  }
}

function ExpenseCtxProvider({ children }) {
  const [expensesState, dispatch] = useReducer(reducersExpenses, []);

  function addExpense(data) {
    dispatch({ type: 'ADD', payload: data });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function setExpenses(data) {
    dispatch({ type: 'SET', payload: data });
  }

  function updateExpense(id, data) {
    dispatch({ type: 'UPDATE', payload: { id, data } });
  }

  const valueContext = {
    expenses: expensesState,
    addExpense,
    setExpenses,
    deleteExpense,
    updateExpense,
  };
  return <ExpensesContext.Provider value={valueContext}>{children}</ExpensesContext.Provider>;
}

export default ExpenseCtxProvider;

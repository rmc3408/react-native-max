import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import { AllExpensesScreen, ManageExpenseScreen, RecentExpensesScreen, tabAllScreen } from './styles/navHeaders';
import { IconButton } from './components/IconButton';
import ExpenseCtxProvider from './store/context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabExpenses() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        ...tabAllScreen,
        headerRight: (props) => {
          return (
            <IconButton
              iconName="add"
              size={24}
              color={props.tintColor}
              onPress={() => navigation.navigate('manage', { id: null })}
            />
          );
        },
      })}
    >
      <Tab.Screen name="allExpenses" component={AllExpenses} options={AllExpensesScreen} />
      <Tab.Screen name="RecentExpenses" component={RecentExpenses} options={RecentExpensesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseCtxProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={tabAllScreen}>
            <Stack.Screen name="expenses" component={TabExpenses} options={{ headerShown: false }} />
            <Stack.Screen
              name="manage"
              component={ManageExpense}
              options={({ route }) => ({
                ...ManageExpenseScreen,
                title: route.params.id ? 'Edit Expense' : 'Add Expense',
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseCtxProvider>
    </>
  );
}

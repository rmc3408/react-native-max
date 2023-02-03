import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpense from './screens/ManageExpense';
import { AllExpensesScreen, RecentExpensesScreen, tabAllScreen } from './styles/navHeaders';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabExpenses() {
  return (
    <Tab.Navigator screenOptions={tabAllScreen} >
      <Tab.Screen name="allExpenses" component={AllExpenses} options={AllExpensesScreen}/>
      <Tab.Screen name="RecentExpenses" component={RecentExpenses} options={RecentExpensesScreen}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="expenses" component={TabExpenses} options={{ headerShown: false }}/>
          <Stack.Screen name="manage" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

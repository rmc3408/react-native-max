import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import Categories from './screen/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsScreen from './screen/Meals';
import MealDetails from './screen/MealDetails';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const headerAllScreenStyled = {
  headerStyle: {
    backgroundColor: '#3f2f25',
  },
  headerTintColor: '#fff', //color of header title
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  contentStyle: {
    backgroundColor: '#3f2f25',
  },
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>      
          <Stack.Navigator screenOptions={headerAllScreenStyled}>
            <Stack.Screen
              name="MealsCategories"
              component={Categories}
              options={{
                title: 'All Categories',
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsScreen} />
            <Stack.Screen
              name="MealDetails"
              component={MealDetails}
              // options={{ headerRight: () => <Text style={{color: 'white'}}>star</Text>}}
            />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

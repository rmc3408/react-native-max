import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Categories from './screen/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreen from './screen/Meals';

const Stack = createNativeStackNavigator();

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
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={headerAllScreenStyled}
        >
          <Stack.Screen
            name="MealsCategories"
            component={Categories}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

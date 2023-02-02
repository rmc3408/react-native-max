import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Categories from './screen/Categories';
import MealsScreen from './screen/Meals';
import MealDetails from './screen/MealDetails';
import Favorites from './screen/Favorites';
import FavoriteContextProvider from './store/context/context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const headerAllScreenStyled = {
  headerStyle: { backgroundColor: '#3f2f25' },
  headerTintColor: '#fff', //color of header title
  headerTitleStyle: { fontWeight: 'bold' },
  sceneContainerStyle: { backgroundColor: '#3f2f25' },
  contentStyle: { backgroundColor: '#3f2f25' },
  drawerContentStyle: { backgroundColor: '#351401' },
  drawerInactiveTintColor: 'white',
  drawerActiveTintColor: '#351401',
  drawerActiveBackgroundColor: '#E4BAA1',
};

function DrawerHookNav() {
  return (
    <Drawer.Navigator screenOptions={headerAllScreenStyled}>
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={headerAllScreenStyled}>
            <Stack.Screen name="MealsCategories" component={DrawerHookNav} options={{ headerShown: false }} />
            <Stack.Screen name="MealsOverview" component={MealsScreen} />
            <Stack.Screen name="MealDetails" component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});

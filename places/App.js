import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import IconButton from './ui/IconButton';
import Colors from './ui/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlaces from './screens/AddPlace';
import Map from './screens/Map';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="allPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton icon="add" color={tintColor} size={24} onPress={() => navigation.navigate('addPlaces')} />
              ),
            })}
          />
          <Stack.Screen name="addPlaces" component={AddPlaces} />
          <Stack.Screen name="map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

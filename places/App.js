import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { IconButton } from './ui/IconButton';
import Colors from './ui/colors';
import AllPlaces from './screens/AllPlaces';
import AddPlaces from './screens/AddPlace';
import Map from './screens/Map';
import { init, removeTable } from './utils/database';
import PlaceDetail from './screens/PlaceDetail';


const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();


export default function App() {
  const [dbInitilazed, setDBInitilazed] = useState(false);

  const checkDatabaseInit = useCallback(async () => {
    if (dbInitilazed) {
      await SplashScreen.hideAsync();
    }
  }, [dbInitilazed]);

  useEffect(() => {
    init().then(() => setDBInitilazed(true))
    // CLEAN DATABASE
    //removeTable().then(() => setDBInitilazed(true))
     
  }, [])

  checkDatabaseInit()
  
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
          <Stack.Screen name="detailPlace" component={PlaceDetail} options={{ title: 'Loading place...' }} />
          <Stack.Screen name="map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

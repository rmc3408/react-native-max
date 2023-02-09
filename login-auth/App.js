import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import { AuthCtxProvider, AuthCtx } from './store/context';
import { useContext, useEffect, useState } from 'react';
import IconButton from './components/ui/IconButton';
import * as SplashScreen from 'expo-splash-screen';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const ctx = useContext(AuthCtx);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
        headerRight: ({ tintColor }) => <IconButton icon="exit" color={tintColor} size={24} onPress={ctx.logout} />,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

SplashScreen.preventAutoHideAsync();

function Navigation() {
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(AuthCtx);
  
  async function getToken() {
    setIsLoading(true);
    const dataToken = await AsyncStorage.getItem('token');
    if (dataToken) {
      ctx.login();
      ctx.saveToken(dataToken);
    }
    await SplashScreen.hideAsync();
  }
  useEffect(() => {
    getToken();
    setIsLoading(false)
    
  }, []);

  return <NavigationContainer>{ctx.isRegistered ? <AuthenticatedStack /> : <AuthStack />}</NavigationContainer>;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthCtxProvider>
        <Navigation />
      </AuthCtxProvider>
    </>
  );
}

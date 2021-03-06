import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './navigation/DrawerNavigator';
import 'react-native-gesture-handler';

export default function App() {
    const [loading] = useFonts({
        openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
        openSansB: require('./assets/fonts/OpenSans-Bold.ttf'),
        lastCall: require('./assets/fonts/TheLastCall-Regular.ttf'),
    });

    if (!loading) {
        return null;
    }

    return (
        <>
        <StatusBar style="auto" />
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
        </>
    );
}

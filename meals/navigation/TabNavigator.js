import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MealNavigator from './MealNavigator';
import Favorites from '../screens/Favorites';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="All" component={MealNavigator} />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

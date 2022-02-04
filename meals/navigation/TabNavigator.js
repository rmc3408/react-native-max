import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MealNavigator from './MealNavigator';
import Favorites from '../screens/Favorites';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.secondary,
            }}
        >
            <Tab.Screen
                name="All"
                component={MealNavigator}
                options={{ tabBarIcon: () => <Ionicons name="ios-list" size={24} /> }}
            />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

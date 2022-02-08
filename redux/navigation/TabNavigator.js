import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import MealNavigator from './MealNavigator';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';
import FavNavigator from './FavNavigator';
//import { Platform } from 'react-native';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.secondary,
                tabBarLabelStyle: {
                    fontFamily: 'openSansB'
                },
            }}
        >
            <Tab.Screen
                name="All"
                component={MealNavigator}
                options={{ tabBarIcon: (icon) => <Ionicons name="ios-restaurant" size={25} color={icon.color} /> }}
            />
            <Tab.Screen
                name="Favorites!"
                component={FavNavigator}
                options={{ tabBarIcon: (icon) => <Ionicons name="ios-star" size={25} color={icon.color} /> }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;

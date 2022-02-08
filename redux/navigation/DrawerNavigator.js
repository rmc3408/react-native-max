import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Filters from '../screens/Filters';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Colors';
import React, { useEffect } from 'react';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                overlayColor: 'transparent',
                drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: 140,
                },
            }}
        >
            <Drawer.Screen name="MealsFav" component={TabNavigator} options={{ drawerLabel: 'All Meals' }} />
            <Drawer.Screen
                name="Filters"
                component={Filters}
                options={({ route }) => { 
                  return {
                    headerShown: true,
                    drawerLabel: 'My filters',
                    headerRight: () => (
                        <Ionicons
                            name="ios-save"
                            size={24}
                            color={Colors.primary}
                            onPress={() => route.params.save()}
                        />
                    ),
                }
              }}
            />
        </Drawer.Navigator>
    );
}

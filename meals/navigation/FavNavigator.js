import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import Colors from '../Colors';
import HeaderBtn from '../components/HeaderBtn';
import Categories from '../screens/Categories';
import Category from '../screens/Category';
import Details from '../screens/Details';
import Favorites from '../screens/Favorites';

const Stack = createNativeStackNavigator();

const FavNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Favorites"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Favorite"
                component={Favorites}
                options={{
                    title: 'Your Favorite Meals',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primary : '#f4511e',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Very Detailed"
                component={Details}
                options={{
                    headerRight: () => <HeaderBtn />,
                }}
            />
        </Stack.Navigator>
    );
};

export default FavNavigator;

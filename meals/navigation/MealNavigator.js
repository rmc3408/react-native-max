import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import Colors from '../Colors';
import HeaderBtn from '../components/HeaderBtn';
import Categories from '../screens/Categories';
import Category from '../screens/Category';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const MealNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
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
                name="Categories"
                component={Categories}
                options={{
                    title: 'Meals Categories',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primary : '#f4511e',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    headerRight: () => <HeaderBtn />,
                }}
            />
        </Stack.Navigator>
    );
};

export default MealNavigator;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import Colors from '../Colors';
import HeaderBtn from '../components/HeaderBtn';
import Categories from '../screens/Categories';
import Category from '../screens/Category';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const FavNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CategoriesFiltered"
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
                name="CategoriesFiltered"
                component={Categories}
                options={{
                    title: 'Your Selected Categories',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primary : '#f4511e',
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen name="CategoryFiltered" component={Category} />
            <Stack.Screen
                name="FilteredDetails"
                component={Details}
                options={{
                    headerRight: () => <HeaderBtn />,
                }}
            />
        </Stack.Navigator>
    );
};

export default FavNavigator;

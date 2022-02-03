import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import Colors from '../Colors';
import Categories from '../screens/Categories';
import Category from '../screens/Category';
import Details from '../screens/Details';

const { Navigator, Screen } = createNativeStackNavigator();

const MealNavigator = () => {
    return (
        <Navigator initialRouteName="Categories">
            <Screen
                name="Categories"
                component={Categories}
                options={{
                    title: 'Meals Categories',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primary : '#f4511e',
                    },
                    headerTintColor: '#fff'
                }}
            />
            <Screen name="Category" component={Category} />
            <Screen name="Details" component={Details} />
        </Navigator>
    );
};

export default MealNavigator;

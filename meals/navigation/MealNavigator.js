import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/Categories';
import Category from '../screens/Category';
import Details from '../screens/Details';

const { Navigator, Screen } = createNativeStackNavigator();

const MealNavigator = () => {
    return (
        <Navigator initialRouteName="Categories">
            <Screen name="Categories" component={Categories} />
            <Screen name="Category" component={Category} />
            <Screen name="Details" component={Details} />
        </Navigator>
    );
};

export default MealNavigator;

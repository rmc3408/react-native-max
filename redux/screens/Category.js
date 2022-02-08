import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import defStyles from '../defStyles';
import { dummy, dummyMeal } from '../data/dummy-data';
import MealList from '../components/MealList';

const Category = (props) => {
    const { categoryId } = props.route.params;
    const selectedCat = dummy.find((item) => item.id === categoryId);

    const displayedMeals = dummyMeal.filter((meal) => meal.categoryIds.includes(categoryId));

    useLayoutEffect(() => {
        props.navigation.setOptions({ title: selectedCat.title });
    }, []);

    return (
        <View style={defStyles.container}>
            {/* <Text style={defStyles.title}>{selectedCat.title}</Text>
                <Button title='Go to meals details' onPress={()=> props.navigation.navigate('Details')} /> */}
            <MealList listData={displayedMeals} navigation={props.navigation} />
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({});

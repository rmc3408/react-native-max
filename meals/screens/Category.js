import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import defStyles from '../defStyles';
import { dummy, dummyMeal } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const Category = (props) => {
    const { categoryId } = props.route.params;
    const selectedCat = dummy.find((item) => item.id === categoryId);

    const displayedMeals = dummyMeal.filter((meal) => meal.categoryIds.includes(categoryId));

    useLayoutEffect(() => {
        props.navigation.setOptions({ title: selectedCat.title });
    }, []);

    const renderedMeal = ({ item }) => {
        return <Item {...item} />;
    };

    const Item = (props) => {
        return <MealItem {...props} onSelectedMeal={() => {}} />
    };

    return (
        <View style={defStyles.container}>
            {/* <Text style={defStyles.title}>{selectedCat.title}</Text>
      <Button title='Go to meals details' onPress={()=> props.navigation.navigate('Details')} /> */}
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderedMeal} />
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({});

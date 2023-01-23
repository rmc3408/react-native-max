import { StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';
import React from 'react';


const MealList = (props) => {
    

    const renderedMeal = ({ item }) => {
        return <Item {...item} />;
    };

    const Item = (details) => {
        return <MealItem {...details} onSelectedMeal={() => {
            props.navigation.navigate('Details', { ...details });
        }} />
    };

  return <FlatList data={props.listData} keyExtractor={(item) => item.id} renderItem={renderedMeal} />
};

export default MealList;

const styles = StyleSheet.create({});

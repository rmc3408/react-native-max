import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import defStyles from '../defStyles';
import { dummy } from '../data/dummy-data';

const Categories = (props) => {
    
    const itemList = ({ item }) => <Item title={item.title} color={item.color} id={item.id} />;

    const Item = ({ id, title, color }) => (
        <TouchableOpacity onPress={directCategory.bind(this, id)} style={{ ...styles.item, backgroundColor: color }}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
    function directCategory(TheID) {
        //console.log(TheID);
        props.navigation.navigate('Category', { categoryId: TheID});
    }

    return (
        <View style={defStyles.container}>
            <Text style={defStyles.title}>CATEGORIES</Text>
            {/* <Button title='Go to category' onPress={()=> props.navigation.navigate('Category')} /> */}
            <FlatList data={dummy} numColumns={2} renderItem={itemList} keyExtractor={(item) => item.id} />
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 15,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
    },
});

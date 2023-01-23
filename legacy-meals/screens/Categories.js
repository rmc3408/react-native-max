import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import defStyles from '../defStyles';
import { dummy } from '../data/dummy-data';

const Categories = (props) => {
    
    const itemList = ({ item }) => <Item title={item.title} color={item.color} id={item.id} />;

    const Item = ({ id, title, color }) => (
        <TouchableOpacity onPress={directCategory.bind(this, id)} style={{ ...styles.grid, backgroundColor: color }}>
            <View style={styles.container}><Text style={styles.title}>{title}</Text></View>
        </TouchableOpacity>
    );
    function directCategory(TheID) {
        //console.log(TheID);
        props.navigation.navigate('Category', { categoryId: TheID });
    }

    return (
        <View style={defStyles.container}>
            {/* <Text style={defStyles.title}>CATEGORIES</Text>
             <Button title='Go to category' onPress={()=> props.navigation.navigate('Category')} /> */}
            <FlatList data={dummy} numColumns={2} renderItem={itemList} keyExtractor={(item) => item.id} />
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        margin: 15, 
        padding: 10,
        height: 150,
        borderRadius: 5,
        elevation: 5,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    container: {
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
    },
    title: {
        fontSize: 20,
        fontFamily: 'openSansB',
        textAlign: 'right',
    },
});

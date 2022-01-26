import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Item(props) {
    return <TouchableOpacity onPress={props.onDelete}><View style={styles.gbox}><Text>{props.title}</Text></View></TouchableOpacity>;
}

const styles = StyleSheet.create({
    gbox: {
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
    }
})
export default Item;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Item(props) {
    return <View style={styles.gbox}><Text>{props.title}</Text></View>;
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

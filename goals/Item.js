import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Item(props) {
    return (
        <TouchableOpacity onPress={props.onDelete}>
            <View style={styles.gbox}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gbox: {
        backgroundColor: '#5e0acc',
        borderColor: 'purple',
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        marginVertical: 5,
    },
    title: {
        color: 'white',
        fontSize: 24,
    }
});
export default Item;

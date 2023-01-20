import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

function Item(props) {
    return (
        <Pressable 
            onPressOut={props.onDelete}
            activeOpacity={0.9}
            android_ripple={{ color: '#210644' }}
            style={pBtn}
        >
            <View style={styles.gbox}>
                <Text style={styles.title}>{props.title}</Text>
            </View> 
        </Pressable>
    );
}

function pBtn(evt) {
    // console.log('Press event in style', evt)
    return [styles.basicCustom, { backgroundColor: evt.pressed ? 'red' : 'green' }]
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
    },
    basicCustom: {
        //extra padding to visualize Pressable
        padding: 2,
    },
    wrapperCustom2: {
        opacity: 0.1,
    }
});

export default Item;

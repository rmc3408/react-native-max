import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import React from 'react';
import color from '../constant/color';


const StyledButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.shape}>
                <Text style={styles.btnTxt}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default StyledButton;

const styles = StyleSheet.create({
    shape: {
        backgroundColor: color.primary,
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
    },
    btnTxt: {
        color: color.white,
        fontFamily: 'osans',
        fontSize: 18,
    },
});

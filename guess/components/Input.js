import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import color from '../constant/color';

const Input = (props) => <TextInput {...props} style={{ ...styles.input, ...props.inputStyle }} />

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 30,
        marginVertical: 10,
        borderBottomColor: color.black,
        borderBottomWidth: 1,
    },
});

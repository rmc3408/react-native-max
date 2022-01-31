import { StyleSheet, Text } from 'react-native';
import React from 'react';

export const TitleText1 = (props) => <Text {...props} style={{ ...styles.title1, ...props.style }}>{props.children}</Text>;
export const TitleText2 = (props) => <Text {...props} style={{ ...styles.title2, ...props.style }}>{props.children}</Text>;


const styles = StyleSheet.create({
    title1: {
        color: 'purple',
        fontSize: 18,
        fontFamily: 'osans',
    },
    title2: {
        color: 'green',
        fontSize: 18,
        fontFamily: 'osans',
    },
});

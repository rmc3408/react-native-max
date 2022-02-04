import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useLayoutEffect } from 'react';
import defStyles from '../defStyles';

const Details = (props) => {
    const data = props.route.params; 

    useLayoutEffect(() => {
        props.navigation.setOptions({ title: data.title });
    }, []);

    return (
        <View style={defStyles.container}>
            <Text style={defStyles.title}>{data.title}</Text>
            <Button title="Go AGAIN to details" onPress={() => props.navigation.push('Details')} />
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
            <Button title="Go to Categories" onPress={() => props.navigation.popToTop()} />
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({});

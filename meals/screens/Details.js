import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import defStyles from '../defStyles';

const Details = (props) => {
    return (
        <View style={defStyles.container}>
            <Text style={defStyles.title}>MEAL DETAIL</Text>
            <Button title="Go AGAIN to details" onPress={() => props.navigation.push('Details')} />
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
            <Button title="Go to Categories" onPress={() => props.navigation.popToTop()} />
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({});

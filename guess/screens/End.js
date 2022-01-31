import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const End = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Game Over</Text>
            <Text>Number of rounds: {props.totalRounds}</Text>
            <Text>Number: {props.userChoice}</Text>
            <Button title='New Game' onPress={props.onRestart}/>
        </View>
    );
};

export default End;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

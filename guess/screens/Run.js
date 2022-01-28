import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef } from 'react';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const GAME_MIN = 1;
const GAME_MAX = 100;

function generateNum(min, max, exc) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exc) {
        return generateNum(min, max, exc);
    } else {
        return rndNum;
    }
}

const Run = (props) => {
    const [curGuess, setCurGuess] = useState(generateNum(GAME_MIN, GAME_MAX, props.userChoice));
    let currentLow = useRef(GAME_MIN);
    let currentHigh = useRef(GAME_MAX);

    const hintGuess = (direction) => {
        if ((direction === 'L' && curGuess < props.userChoice) || (direction === 'H' && curGuess > props.userChoice)) {
            Alert.alert('Dont Lie, B', 'you know is wrong', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }
        if ( direction === 'L') {
            currentHigh.current = curGuess;
        } else {
            currentLow.current = curGuess;
        }
        const nextNum = generateNum(currentLow.current, currentHigh.current, curGuess);
        setCurGuess(nextNum);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{curGuess}</NumberContainer>
            <Card cardStyle={styles.cardChoice}>
                <Button title="LOWER" onPress={hintGuess.bind(this, 'L')} />
                <Button title="GREATER" onPress={hintGuess.bind(this, 'H')} />
            </Card>
        </View>
    );
};

export default Run;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    cardChoice: {
        flexDirection: 'row',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        justifyContent: 'space-around',
    },
});

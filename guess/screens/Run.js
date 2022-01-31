import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons';

import defStyles from '../constant/def-styles';
import { TitleText1, TitleText2 } from '../styles/Text';
import StyledButton from '../styles/Button';

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
    const [rounds, setRounds] = useState(0);
    let currentLow = useRef(GAME_MIN);
    let currentHigh = useRef(GAME_MAX);

    const hintGuess = (direction) => {
        if ((direction === 'L' && curGuess < props.userChoice) || (direction === 'H' && curGuess > props.userChoice)) {
            Alert.alert('Dont Lie, B', 'you know is wrong', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'L') {
            currentHigh.current = curGuess;
        } else {
            currentLow.current = curGuess;
        }
        const nextNum = generateNum(currentLow.current, currentHigh.current, curGuess);
        setCurGuess(nextNum);
        setRounds((curSt) => curSt + 1);
    };

    const { onOver } = props;
    useEffect(() => {
        if (curGuess === props.userChoice) {
            onOver(rounds);
        }
    }, [curGuess, onOver]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            <Text style={defStyles.title}>Global style</Text>
            <TitleText1>Custom styled component</TitleText1>
            <TitleText2 style={styles.bold}>Custom+ styled component</TitleText2>
            <NumberContainer>{curGuess}</NumberContainer>
            <Card cardStyle={styles.cardChoice}>
                <StyledButton onPress={hintGuess.bind(this, 'L')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </StyledButton>
                <StyledButton onPress={hintGuess.bind(this, 'H')}>
                    <Ionicons name="md-add" size={24} color="white" />
                </StyledButton>
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
    bold: {
        fontFamily: 'osans-b',
    },
    title: {
        fontSize: 22,
        color: 'black',
    },
});

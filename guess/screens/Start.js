import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import Card from '../components/Card.js';
import Input from '../components/Input';
import color from '../constant/color';
import NumberContainer from '../components/NumberContainer.js';

const Start = (props) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [enteredNum, setEnteredNum] = useState('');
    const [num, setNum] = useState();

    const handleOutsideKeyboard = () => Keyboard.dismiss();
    const handleNoDecimalsValidation = (value) => {
        setEnteredNum(value.replace(/[^0-9]/, ''));
    };
    const resetNumber = () => {
        setIsConfirmed(false);
        setEnteredNum('');
    };
    const startNumber = () => {
        const choosen = parseInt(enteredNum);
        if (choosen <= 0 || isNaN(choosen)) {
            Alert.alert('Invalid Number', 'Enter number between 1 and 99', [
                { text: 'Okie', style: 'destructive', onPress: resetNumber },
            ]);
            return;
        }
        Keyboard.dismiss();
        setNum(choosen);
        setIsConfirmed(true);
        setEnteredNum('');
    };

    return (
        <TouchableWithoutFeedback onPress={handleOutsideKeyboard}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card cardStyle={styles.cardContainer}>
                    <Text>Select a number</Text>
                    <Input
                        inputStyle={styles.input}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={handleNoDecimalsValidation}
                        value={enteredNum}
                    />
                    <View style={styles.btnContainer}>
                        <View style={styles.btnSize}>
                            <Button title="Start" onPress={startNumber} color={color.secondary} />
                        </View>
                        <View style={styles.btnSize}>
                            <Button title="Reset" onPress={resetNumber} color={color.primary} />
                        </View>
                    </View>
                </Card>
                {isConfirmed && (
                    <Card cardStyle={styles.summaryContainer}>
                        <Text style={{ alignSelf: 'center'}}>You selected</Text>
                        <NumberContainer>{num}</NumberContainer>
                        <Button title='START GAME' onPress={() => props.run(num)} />
                    </Card>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Start;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
    },
    cardContainer: {
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    btnContainer: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    btnSize: {
        width: '40%',
        borderRadius: 8,
    },
    summaryContainer: {
        marginTop: 30,
    },
});

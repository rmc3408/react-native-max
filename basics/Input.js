import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

function Input(props) {
    const [goal, setGoal] = useState('');

    const handleInputTxt = (value) => {
        setGoal(value);
    };

    return <View style={styles.box}>
        <TextInput placeholder='Course goal here' style={styles.ti} onChangeText={handleInputTxt} value={goal} />
        <Button title="Add" onPress={() => props.handleInputList(goal)} />
    </View>;
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ti: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10
    },
})
export default Input;

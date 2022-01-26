import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native';

function Input(props) {
    const [goal, setGoal] = useState('');

    const handleInputTxt = (value) => {
        setGoal(value);
    };

    const addInputHandler = () => {
        props.handleInputList(goal)
        setGoal('');
    };

    const cancelInputHandler = () => {
        props.cancelM();
        setGoal('');
    };

    return (
        <Modal visible={props.visibleB} animationType='slide'>
            <View style={styles.box}>
                <TextInput placeholder='Course goal here' style={styles.ti} onChangeText={handleInputTxt} value={goal} />
                <View style={styles.btns}>
                    <View style={styles.btn}><Button title="Add" onPress={addInputHandler} /></View>
                    <View style={styles.btn}><Button title="Cancel" color='red' onPress={cancelInputHandler} /></View>
                </View>
            </View>
        </Modal>);
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ti: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 10,
        marginBottom: 10,
    },
    btns: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around',
    },
    btn: {
        width: '40%',
    }
})
export default Input;

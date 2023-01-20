import React, { useId, useState } from 'react';
import { StyleSheet, TextInput, Button, View, Modal, Image } from 'react-native';

function GoalInput(props) {
    const clientId = useId();
    const [goal, setGoal] = useState('');

    const handleInputTxt = (value) => {
        setGoal(value);
    };

    const addInputHandler = () => {
        props.handleInputList({ id: 'input-' + clientId + Math.random().toPrecision(2), title: goal });
        setGoal('');
    };

    const cancelInputHandler = () => {
        props.cancelM();
        setGoal('');
    };

    return (
        <Modal visible={props.visibleB} animationType="slide">
            <View style={styles.box}>
                <Image source={require('./assets/goal.png')} style={styles.image}/>
                <TextInput
                    placeholder="Course goal here"
                    style={styles.ti}
                    onChangeText={handleInputTxt}
                    value={goal}
                />
                <View style={styles.btns}>
                    <View style={styles.btn}>
                        <Button title="Add" color='#5c0ecc' onPress={addInputHandler} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Cancel" color="pink" onPress={cancelInputHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ti: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#5e0acc',
        padding: 10,
        marginBottom: 10,
    },
    btns: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-around',
    },
    btn: {
        width: '40%',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 60,
        backgroundColor: 'grey'

    }
});
export default GoalInput;

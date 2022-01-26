import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from 'react-native';
import Input from './Input';
import Item from './Item';

export default function App() {
    const [listGoal, setListGoal] = useState([]);
    const [isVModal, setIsVModal] = useState(false);

    const handleInputList = (value) => {
        setListGoal((curList) => [...curList, { id: Math.random().toString(), course: value }]);
        setIsVModal(false);
    };

    const handleDeletion = (goalid) => {
        //console.log('My id is ', goalid);
        //const newList = listGoal.filter((item) => item.id !== goalid);
        //setListGoal(newList);
        setListGoal((currList) => currList.filter((item) => item.id !== goalid));
    };

    const cancelModalHandler = () => setIsVModal(false);

    return (
        <View style={styles.section}>
            <Button title="New Course" onPress={() => setIsVModal(true)} />
            <Input visibleB={isVModal} handleInputList={handleInputList} cancelM={cancelModalHandler} />
            <FlatList
                keyExtractor={(g) => g.id}
                data={listGoal}
                renderItem={(g) => <Item onDelete={handleDeletion.bind(this, g.item.id)} title={g.item.course} />}
            />
            <ScrollView>
                <View style={styles.scrollBox}>
                    <Text>Goal</Text>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        padding: 50,
    },
    scrollBox: {
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
    },
});

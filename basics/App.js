import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Input from './Input';
import Item from './Item';

export default function App() {
  const [listGoal, setListGoal] = useState([]);

  const handleInputList = (value) => {
    setListGoal(curList => [...curList, { id: Math.random().toString(), course: value }]);
  };

  return (
    <View style={styles.section}>
      <Input handleInputList={handleInputList} />
      <FlatList keyExtractor={(g) => g.id} data={listGoal} renderItem={(g) => <Item title={g.item.course} />} />
      <ScrollView>
        <View style={styles.scrollBox}><Text>Goal</Text></View>
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
}
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import GoalInput from './Input';
import Item from './Item';

export default function App() {
  const [listGoal, setListGoal] = useState([]);
  const [isVModal, setIsVModal] = useState(false);

  const handleInputList = (values) => {
    setListGoal((curList) => [
      ...curList,
      { id: values.id, course: values.title },
    ]);
    // console.log(values);
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
    <View style={styles.container}>
      <View style={styles.section}>
        <StatusBar style="auto" />
        <Button title="Add new goal" onPress={() => setIsVModal(true)} />
        <GoalInput
          visibleB={isVModal}
          handleInputList={handleInputList}
          cancelM={cancelModalHandler}
        />
        <FlatList
          keyExtractor={(g) => g.id}
          data={listGoal}
          renderItem={(g) => (
            <Item
              onDelete={handleDeletion.bind(this, g.item.id)}
              title={g.item.course}
            />
          )}
        />
      </View>
      <View style={styles.scrollBox}>
        <ScrollView>
          <Text style={styles.title}>Goals</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    padding: 50,
  },
  scrollBox: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'stretch',
    backgroundColor: '#5e0acc',
    paddingVertical: 30,
    
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 24,
  },
});

import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../ui/colors';
import CameraPicker from '../utils/camera';
import LocationPicker from '../utils/location';

const PlaceForm = () => {
  const [ titleTxt, setTitleTxt ] = useState('');
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>ADD PLACE - {titleTxt} </Text>
        <TextInput style={styles.input} onChangeText={(value) => setTitleTxt(value)}/>
        <CameraPicker />
        <LocationPicker />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.primary500
  },
  input: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
    borderBottomColor: colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: colors.primary100
  }
});

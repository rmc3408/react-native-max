import { useState, useCallback } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../ui/colors';
import CameraPicker from '../utils/camera';
import LocationPicker from '../utils/location';
import Place from '../models/place';

const PlaceForm = ({ onCreatePlace }) => {
  const [titleTxt, setTitleTxt] = useState('');
  const [getImage, setGetImage] = useState();
  const [getLocationPick, setGetLocationPick] = useState();

  function saveData() {
    const newPlace = new Place(titleTxt, getImage, getLocationPick.address, {
      latitude: getLocationPick.lat,
      longitude: getLocationPick.lgn,
    });
    onCreatePlace(newPlace);
  }

  const locationHandler = useCallback((value) => {
    setGetLocationPick(value);
  }, []);

  function imageHandler(value) {
    setGetImage(value);
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>title = {titleTxt} </Text>
        <TextInput style={styles.input} onChangeText={(value) => setTitleTxt(value)} />
        <CameraPicker onPickImage={imageHandler} />
        <LocationPicker onPickLocation={locationHandler} />
        <Button style={styles.btn} title="SAVE" color={colors.primary800} onPress={saveData} />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
    borderBottomColor: colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: colors.primary100,
  },
  btn: {
    backgroundColor: colors.primary100,
    margin: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
});

import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import colors from '../ui/colors';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { getMapPreview } from './map';
import { useNavigation, useRoute } from '@react-navigation/native';

const LocationPicker = () => {
  const [location, setLocation] = useState({ lat: '', lgn: '' });
  const nav = useNavigation();
  const route = useRoute();

  async function getPermission() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      //setErrorMsg('Permission to access location was denied');
      return false;
    }
    return true;
  }

  async function getLocationUserHandler() {
    const hasPermission = await getPermission();
    if (!hasPermission) return;

    const where = await getCurrentPositionAsync({});
    //console.log(where)
    //console.log(getMapPreview(where.coords.latitude, where.coords.longitude))

    setLocation({ lat: where.coords.latitude, lgn: where.coords.longitude });
  }

  function getMapToUserHandler() {
    nav.navigate('map', location);
  }

  let mapLocationPreview = <Text>No location found</Text>;

  if (location.lat !== '') {
    mapLocationPreview = <Image source={{ uri: getMapPreview(location.lat, location.lgn) }} style={styles.mapImage} />;
  }
  if (route.params?.latitude) {
    mapLocationPreview = (
      <Image source={{ uri: getMapPreview(route.params.latitude, route.params.longitude) }} style={styles.mapImage} />
    );
  }
  
  return (
    <View>
      <View style={styles.locationPreview}>{mapLocationPreview}</View>
      <View style={styles.actionsGroupBtn}>
        <Button title="locate user" onPress={getLocationUserHandler} />
        <Button title="map" onPress={getMapToUserHandler} />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  locationPreview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300,
    marginVerical: 8,
    backgroundColor: colors.primary100,
    borderRadius: 6,
  },
  actionsGroupBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
});

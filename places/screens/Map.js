import { useCallback, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

const Map = ({ navigation, route }) => {
  const myRegion = {
    latitude: route.params.initLat || -23.0151482,
    longitude: route.params.initLgn || -43.471115,
    latitudeDelta: 0.00262,
    longitudeDelta: 0.00221,
  };
  const [selectLocation, setSelectLocation] = useState(null);

  function setNewMarker(evt) {
    if (route.params.initLat) return;
    
    setSelectLocation({
      latitude: evt.nativeEvent.coordinate.latitude,
      longitude: evt.nativeEvent.coordinate.longitude,
    });
  }

  const saveRealLocation = useCallback(() => {
    if (!selectLocation) return;
    navigation.navigate('addPlaces', selectLocation);
  }, [navigation, selectLocation]);

  useLayoutEffect(() => {
    if (route.params.initLat) return;

    navigation.setOptions({
      headerRight: ({ tintColor }) => <Ionicons name="save" size={24} color={tintColor} onPress={saveRealLocation} />,
    });
  }, [navigation, saveRealLocation, route.params]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={myRegion} onPress={setNewMarker}>
        {selectLocation && (
          <Marker
            title="Picked"
            coordinate={{ latitude: selectLocation.latitude, longitude: selectLocation.longitude }}
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

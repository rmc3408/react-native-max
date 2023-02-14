import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../ui/colors';
import PlacesItem from './PlaceItem';

const PlacesList = ({ places }) => {
  function renderPlaceDetails(obj) {
    const { item } = obj;
    return <PlacesItem onSelect={() => {}} {...item} />;
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places available</Text>
      </View>
    );
  }
  console.log(places)
    
  return <FlatList data={places} keyExtractor={(item) => item.id} renderItem={renderPlaceDetails} />;
};

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: colors.primary200
  },
});

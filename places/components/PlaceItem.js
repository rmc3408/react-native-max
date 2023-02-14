import { Image, Pressable, StyleSheet, View, Text } from 'react-native';
import colors from '../ui/colors';

const PlacesItem = ({ title, address, imageUrl, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.addy}>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PlacesItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 4,
    backgroundColor: colors.primary500,
  },
  pressed: {},
  info: { 
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray700
  },
  addy: {
    fontSize: 12,
    color: colors.gray700
  },
  image: {
    flex: 2,
    width: '100%',
    height: 160,
    color: colors.gray700
  }
});

import { Image, Pressable, StyleSheet, View } from 'react-native';

const PlacesItem = ({ title, location, imageUrl, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <View>
        <Image source={{ uri: imageUrl }}/>
        <View>
          <Text>{title}</Text>
          <Text>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PlacesItem;

const styles = StyleSheet.create({});

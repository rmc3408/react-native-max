import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconBtn = ({ color, name, iconPress }) => {
  return (
    <View>
      <Pressable onPress={iconPress}>
        <Ionicons name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

export default IconBtn;

const styles = StyleSheet.create({});

import { Ionicons } from '@expo/vector-icons';
import { Pressable, View, StyleSheet } from 'react-native';

export function IconButton({ iconName, size, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name={iconName} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    marginVertical: 2,
    marginHorizontal: 8,
    borderRadius: 24,
  },
});

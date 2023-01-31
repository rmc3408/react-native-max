import { StyleSheet, Text, View, Pressable } from 'react-native'

const CategoriesItem = ({ title, color }) => {
  const specificStyled = {
    backgroundColor: color,
  };

  return (
    <View style={[styles.item, specificStyled]}>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriesItem

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 150,
    padding: 16,
  },
})
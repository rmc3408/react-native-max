import { StyleSheet, Text, View, Pressable, Image } from 'react-native'

const MealItem = ({ meal }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image source={{ uri: meal.imageUrl}} alt={meal.id} style={styles.image} height={300} />
          <Text style={styles.title}>{meal.title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{meal.duration}</Text>
          <Text>{meal.complexibility.toUpperCase()}</Text>
          <Text>{meal.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
    padding: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
  }
})
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MealItem = ({ meal }) => {
  const nav = useNavigation();

  function mealSelected() {
    nav.navigate('MealDetails', { meal });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable onPress={mealSelected} >
        <View>
          <Image source={{ uri: meal.imageUrl}} alt={meal.id} style={styles.image} />
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
    height: 200,
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
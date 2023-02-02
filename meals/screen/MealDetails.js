import { useLayoutEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconBtn from '../components/IconBtn';

const MealDetails = ({ route, navigation }) => {
  const [savedFavorite, setSavedFavorite] = useState(false);
  const { id, title, duration, affordability, complexibility, imageUrl, ingredients, steps } = route.params.meal;

  function headerFavoriteToggle(e) {
    setSavedFavorite(!savedFavorite);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconBtn name="star" size={24} color={savedFavorite ? 'red' : 'white'} iconPress={headerFavoriteToggle}>
          star
        </IconBtn>
      ),
    });
  }, [navigation, headerFavoriteToggle, savedFavorite]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: imageUrl }} alt={id} style={styles.image} />
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.containerIngredients}>
        {ingredients.map((ing) => (
          <Text key={ing} style={styles.itemIngredients}>
            {ing}
          </Text>
        ))}
      </View>
      <Text style={styles.title}>Steps</Text>
      <ScrollView>
        {steps.map((ing) => (
          <Text key={ing} style={styles.subtitle}>
            -- {ing}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginTop: 16,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
    marginHorizontal: 8,
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#fff',
  },
  subtitle: {
    fontSize: 16,
    marginHorizontal: 8,
    color: 'white',
  },
  containerIngredients: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  itemIngredients: {
    height: 16,
    paddingLeft: 8,
    width: '50%',
    color: 'white',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
  },
});

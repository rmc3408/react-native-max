import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealsScreen = (props) => {
  const { categoryId: catID, categoryTitle } = props.route.params;

  //useLayoutEffect runs simultanously rendering screen
  // use this when useEffect will change layout.
  useLayoutEffect(() => {
    props.navigation.setOptions({ title: categoryTitle });
  }, [categoryTitle]);

  const filteredMeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(catID));

  function renderMealItem(meal) {
    return <MealItem meal={meal.item} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList data={filteredMeals} keyExtractor={(key) => key.id} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

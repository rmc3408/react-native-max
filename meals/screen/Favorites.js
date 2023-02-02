import { StyleSheet, View, FlatList } from 'react-native';
import { useContext } from 'react';
import { FavoriteContext } from '../store/context/context';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const Favorites = () => {
  const context = useContext(FavoriteContext);
  const favoriteList = context.ids.map(id => MEALS.find(meal => meal.id === id));

  function renderMealItem(meal) {
    return <MealItem meal={meal.item} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList data={favoriteList} keyExtractor={(key) => key.id} renderItem={renderMealItem} />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});

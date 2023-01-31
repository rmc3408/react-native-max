import { StyleSheet, View, FlatList } from 'react-native';
import CategoriesItem from '../components/CategoriesItem';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoriesItem(obj, nav) {
  return <CategoriesItem id={obj.item.id} title={obj.item.title} color={obj.item.color} navigationProps={nav} />
}

const Categories = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(obj) => obj.id}
        renderItem={(obj) => renderCategoriesItem(obj, props.navigation)}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  }
});

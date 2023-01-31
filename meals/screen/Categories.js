import { StyleSheet, View, FlatList } from 'react-native';
import CategoriesItem from '../components/CategoriesItem';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoriesItem(obj) {
  return <CategoriesItem title={obj.item.title} color={obj.item.color} />
}

const Categories = () => {
  return (
    <View style={styles.list}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(obj) => obj.id}
        renderItem={renderCategoriesItem}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({

});

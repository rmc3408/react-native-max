import { StyleSheet, Text, View, Pressable, Platform } from 'react-native'

const CategoriesItem = ({ id, title, color, navigationProps }) => {
  const specificStyled = {
    backgroundColor: color,
  };

  function onPressCategory() {
    navigationProps.navigate('MealsOverview', { categoryId: id });
  }

  function categoriesPressed({pressed}) {
    return [styles.innerContainer, specificStyled, { opacity: pressed ? 0.6 : null }];
  }

  return (
    <View style={[styles.card, styles.shadowProp]}>
      <Pressable style={categoriesPressed} android_ripple={{ color: "#ccc" }} onPress={onPressCategory}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriesItem

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 180,
    borderRadius: 8,
    margin: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  shadowProp: {
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  }
})
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Colors from '../styles/colors';
import { getDateFormatted } from '../Utils/functions';

const ExpenseItem = (props) => {
  const { id, description, amount, createdAt } = props;
  const nav = useNavigation()

  function goToExpenseManage() {
    nav.navigate('manage', { id, description, amount, createdAt: getDateFormatted(createdAt) });
  }

  return (
    <Pressable onPress={goToExpenseManage}>
      <View style={styles.container}>
        <View style={styles.description}>
          <Text style={[styles.description, styles.textBase]}>{description}</Text>
          <Text style={styles.textBase}>{getDateFormatted(createdAt)}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: 'row',
    borderRadius: 6,
    justifyContent: 'space-between',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowColor: Colors.gray500,
  },
  textBase: {
    color: Colors.primary50,
  },
  description: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  priceContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: Colors.white,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'flex-end',
    minWidth: 80,
  },
  priceText: {
    color: Colors.primary500,
  }
});

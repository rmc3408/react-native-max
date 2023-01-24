import { StyleSheet, Text, View } from 'react-native'

const GuessLogItem = (props) => {
  return (
    <View style={styles.list}>
      <Text style={styles.item}># {props.round}</Text>
      <Text style={styles.item}>opponent guess: {props.number}</Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
  list: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.8,
    backgroundColor: 'yellow',
  },
  item: {
    paddingHorizontal: 12,
  }
})
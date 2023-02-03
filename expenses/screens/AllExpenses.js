import { StyleSheet, View } from 'react-native'
import Output from '../components/Output'

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <Output time={10} />
    </View>
  )
}

export default AllExpenses

const styles = StyleSheet.create({
})
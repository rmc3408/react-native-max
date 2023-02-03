import { StyleSheet, Text, View } from 'react-native'
import Output from '../components/Output'

const RecentExpenses = () => {
  return (
    <View style={styles.container}>
      <Output time={'TOTAL'}/>
    </View>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({

})
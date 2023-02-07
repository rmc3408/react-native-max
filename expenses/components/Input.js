import { StyleSheet, Text, View, TextInput } from 'react-native'
import colors from '../styles/colors'

const Input = ({ label, style, ...textConfig }) => {

  let styled = [styles.input];
  if (textConfig && textConfig.multiLine) styled.push(styles.multi);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textConfig} style={[styled, textConfig.isValid ? null : styles.error]} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 12,
    color: colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.primary100,
    padding: 6,
    color: colors.primary700,
    fontSize: 18,
    borderRadius: 6,
  },
  multi: {
    minHeight: 100,
    textAlignVertical: 'top'
  },  
  error: {
    borderColor: colors.error500,
    borderWidth: 2,
    backgroundColor: colors.error50,
  }
})
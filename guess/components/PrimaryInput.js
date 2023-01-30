import { Input, useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const PrimaryInput = (props) => {
  const styled = useTheme();

  return (
    <Input
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputData}
      maxLength={2}
      selectionColor={styled.theme.colors.primary}
      keyboardType="number-pad"
      value={props.inputTxt}
      onChangeText={props.onTyping}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 64,
    marginTop: 32,
  },
  inputData: {
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default PrimaryInput;

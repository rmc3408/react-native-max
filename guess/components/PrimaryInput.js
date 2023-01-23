import { Input, useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const PrimaryInput = (props) => {
  const styled = useTheme();

  return (
    <Input
      placeholder="??"
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputData}
      maxLength={2}
      selectionColor={styled.theme.colors.primary}
      keyboardType="number-pad"
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 50,
    alignSelf: 'center',
  },
  inputData: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default PrimaryInput;

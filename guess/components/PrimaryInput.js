import { Input, useTheme } from '@rneui/themed';
import { useState } from 'react';
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
      value={props.inputTxt}
      onChangeText={props.onTyping}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 54,
    alignSelf: 'center',
  },
  inputData: {
    fontSize: 54,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default PrimaryInput;

import { Alert, View, Text } from 'react-native';
import { makeStyles } from '@rneui/themed';
import PrimaryButton from '../components/PrimaryBtn';
import PrimaryInput from '../components/PrimaryInput';
import { useState } from 'react';
import Title from '../components/Title';
import Card from '../components/Card';

function validateUserChoice(value) {
  const chosen = parseInt(value);
  if (isNaN(chosen) || chosen <= 0 || chosen > 99) {
    return false;
  }
  return true;
}

const Start = (props) => {
  const styles = usePreDefinedStyle(props);
  const [playerInput, setPlayerInput] = useState('');

  function onTyping(value) {
    setPlayerInput(value);
  }

  function resetHandler() {
    setPlayerInput('');
  }

  function onConfirming() {
    const isValid = validateUserChoice(playerInput);
    if (!isValid) {
      Alert.alert('Invalid Number', 'must be number between 1 to 99', [
        { text: 'Ok', style: 'destructive', onPress: resetHandler },
      ]);
    } else {
      props.onConfirm(playerInput);
    }
  }

  return (
    <View style={styles.container}>
      <Title>Guess my number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter number from 1 to 99</Text>
        <PrimaryInput onTyping={onTyping} inputTxt={playerInput} />
        <View style={styles.btnContainer}>
          <PrimaryButton onPressing={resetHandler}>Clean</PrimaryButton>
          <PrimaryButton onPressing={onConfirming}>Confirm</PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

const usePreDefinedStyle = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  instructionText: {
    fontSize: 22,
    color: theme.colors.primary,
  },
}));

export default Start;

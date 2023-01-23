import { Alert, View } from 'react-native';
import { makeStyles } from '@rneui/themed';
import PrimaryButton from '../components/PrimaryBtn';
import PrimaryInput from '../components/PrimaryInput';
import { useState } from 'react';

const Start = (props) => {
  const styles = usePreDefinedStyle(props);
  const [playerInput, setPlayerInput] = useState('');

  function onTyping(value) {
    setPlayerInput(value);
  }
  
  function resetHandler() {
    setPlayerInput('')
  }

  function onConfirming() {
    const chosen = parseInt(playerInput);

    if (isNaN(chosen) || chosen <= 0 || chosen > 99) {
      Alert.alert('Invalid Number', "must be number between 1 to 99",
      [{ text: 'Okie', style:'destructive', onPress: resetHandler }]
      )
    }
    console.log('value confirmed', playerInput);
  }

  return (
    <View style={styles.start}>
      <PrimaryInput onTyping={onTyping} inputTxt={playerInput} />
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <PrimaryButton onPressing={resetHandler}>Clean</PrimaryButton>
        </View>
        <View style={styles.btn}>
          <PrimaryButton onPressing={onConfirming}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const usePreDefinedStyle = makeStyles((theme, props) => ({
  start: {
    marginTop: 100,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: theme.colors.secondary,
    borderRadius: 6,

    elevation: 8, //only android,

    shadowColor: theme.colors.black,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    flex: 1,
    marginHorizontal: 6,
  },
}));

export default Start;

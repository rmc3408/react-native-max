import { View } from 'react-native';
import { makeStyles } from '@rneui/themed';
import PrimaryButton from '../components/PrimaryBtn';
import PrimaryInput from '../components/PrimaryInput';

const Start = (props) => {
  const styles = usePreDefinedStyle(props);

  return (
    <View style={styles.start}>
      <PrimaryInput />
      <View style={styles.btnContainer}>
        <PrimaryButton>Clean</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

const usePreDefinedStyle = makeStyles((theme, props) => ({
  start: {
    marginTop: 100,
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
}));

export default Start;

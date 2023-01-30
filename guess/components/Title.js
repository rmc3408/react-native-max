import { makeStyles } from '@rneui/themed';
import { useContext } from 'react';
import { Text, Platform } from 'react-native';
import { NumberCtx } from '../context/NumContext';

const Title = (props) => {
  const value = useContext(NumberCtx);
  props = {
    ...props,
    chosen: value,
  };
  const styles = usePreDefinedStyle(props);

  return <Text style={[styles.title, props.style]}>{props.children}</Text>;
};

export default Title;

const usePreDefinedStyle = makeStyles((theme, props) => {
  // console.log(props, theme)
  return {
    title: {
      color: Platform.select({ ios: theme.colors.secondary, android: theme.colors.primary }) ,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      borderColor:  Platform.select({ ios: theme.colors.secondary, android: theme.colors.primary }),
      borderWidth: Platform.OS === 'ios' && props.chosen > 50 ? 6 : 2,
      padding: 12,
      fontFamily: 'open-sans-bold',
      maxWidth: '80%',
      width: 300,
    },
  };
});

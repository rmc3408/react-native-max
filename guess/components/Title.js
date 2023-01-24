import { makeStyles } from '@rneui/themed';
import { useContext } from 'react';
import { Text } from 'react-native';
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
      color: theme.colors.primary,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      borderColor: theme.colors.primary,
      borderWidth: props.chosen > 50 ? 6 : 2,
      padding: 12,
      fontFamily: 'open-sans-bold',
    },
  };
});

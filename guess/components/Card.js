import { View } from 'react-native'
import React from 'react'
import { makeStyles } from '@rneui/themed';

const Card = (props) => {
  const styles = usePreDefinedStyle(props);

  return (
    <View style={styles.start}>
      { props.children }
    </View>
  )
}

export default Card;


const usePreDefinedStyle = makeStyles((theme, props) => ({
  start: {
    marginTop: 30,
    padding: 16,
    backgroundColor: theme.colors.secondary,
    borderRadius: 6,
    elevation: 8, //only android,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    alignItems: 'center',
  },
}));

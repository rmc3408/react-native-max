import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthCtx } from '../store/context';

function WelcomeScreen() {

  const [ user, setUser ] = useState(null);
  const { token } = useContext(AuthCtx);

  useEffect(() => {
    async function getMessage() {
      const response = await axios.get('https://expenses-b5f79-default-rtdb.firebaseio.com/message.json?auth=' + token);
      setUser(response.data);
    }
    if(token) getMessage()
  }, [token])
  
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{user}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

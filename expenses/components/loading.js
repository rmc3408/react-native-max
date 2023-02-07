import { View, ActivityIndicator, StyleSheet } from 'react-native';
import colors from '../styles/colors';

function LoadingSpinner() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={colors.primary700} />
    </View>
  );
}

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


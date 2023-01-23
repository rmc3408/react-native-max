import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { ThemeProvider, createTheme } from '@rneui/themed';
import Start from './screens/start';

const theme = createTheme({
  lightColors: {
    primary: '#ffffaa',
    secondary: '#72063c',
  },
  mode: 'light',
  components: {
    Button: {
      titleStyle: {
        color: '#363737'
      }
    },
    Input: {
      inputContainerStyle: {
        borderBottomColor: '#ffffaa',
      },
      inputStyle: {
        color: '#ffffaa',
      },
      placeholderTextColor: '#ffffaa',
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider style={styles.container}>
        <StatusBar style="auto" />

        <Start />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
});

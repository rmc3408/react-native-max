import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
        color: '#363737',
      },
    },
    Input: {
      inputContainerStyle: {
        borderBottomColor: '#ffffaa',
      },
      inputStyle: {
        color: '#ffffaa',
      },
      placeholderTextColor: '#ffffaa',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LinearGradient colors={[ '#4e0329', '#ddb52a']} style={styles.rootScreen}>
        <SafeAreaProvider>
          <StatusBar style="auto" />

          <ImageBackground
            source={require('./assets/images/bg.png')}
            resizeMode="cover"
            style={[styles.rootScreen]}
            imageStyle={styles.imageTrans}
          >
            <Start />
          </ImageBackground>
        </SafeAreaProvider>
      </LinearGradient>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  imageTrans: { opacity: 0.25 }
});

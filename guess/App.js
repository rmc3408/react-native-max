import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from '@rneui/themed';
import { useCallback, useState } from 'react';
import { NumberCtx } from './context/NumContext';
import { theme } from './theme/theme';
import GameScreen from './screens/game';
import GameOver from './screens/over';
import Start from './screens/start';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [useNumber, setUseNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  function startGame(num) {
    setUseNumber(num);
    setGameOver(false);
  }

  function startNewGameHandler() {
    setUseNumber(null);
    setGameOver(false);
    setGuessRounds(0);
  }

  let screen = <Start onConfirm={startGame} />;
  if (gameOver && useNumber)
    screen = (
      <GameOver
        rounds={guessRounds}
        userChoice={useNumber}
        onStartOver={startNewGameHandler}
      />
    );
  if (useNumber && !gameOver)
    screen = <GameScreen onSetGameOver={setGameOver} onSetTotalRounds={setGuessRounds} />;

  return (
    <ThemeProvider theme={theme}>
      {/* BackGround */}
      <LinearGradient
        colors={[
          theme.lightColors.backgroundDark,
          theme.lightColors.backgroundLight,
        ]}
        style={styles.rootScreen}
      >
        <StatusBar style="auto" />
        <ImageBackground
          source={require('./assets/images/bg.png')}
          resizeMode="cover"
          style={[styles.rootScreen]}
          imageStyle={styles.imageTrans}
        >
          {/* Game state management here */}
          <NumberCtx.Provider value={useNumber}>
            {/* Main Content */}
            <SafeAreaProvider onLayout={onLayoutRootView}>
              <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </SafeAreaProvider>
          </NumberCtx.Provider>
        </ImageBackground>
      </LinearGradient>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
  imageTrans: { opacity: 0.25 },
});

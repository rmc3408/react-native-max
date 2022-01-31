import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header.js';
import Run from './screens/Run.js';
import Start from './screens/Start.js';
import End from './screens/End.js';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

function fetchFonts() {
    return Font.loadAsync({
        'osans': require('./assets/OpenSans-Regular.ttf'),
        'osans-b': require('./assets/OpenSans-Bold.ttf'),
    });
}

export default function App() {
    const [userNum, setUserNum] = useState();
    const [rounds, setRounds] = useState(0);
    const [dataloaded, setDataLoaded] = useState(false);

    const configureNewGame = () => {
        setRounds(0);
        setUserNum(null);
    };

    const runStartedGame = (value) => {
        setUserNum(value);
        setRounds(0);
    };

    const runEndGame = (tot) => {
        setRounds(tot);
    };

    let content = <Start run={runStartedGame} />;

    if (userNum && rounds <= 0) {
        content = <Run userChoice={userNum} onOver={runEndGame} />;
    } else if (rounds > 0) {
        content = <End userChoice={userNum} totalRounds={rounds} onRestart={configureNewGame} />;
    }

    if (!dataloaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={console.warn}
            />
        );
    }

    return (
        <View style={styles.screenHeader}>
            <Header title="Guess a number" />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screenHeader: {
        flex: 1,
    },
});

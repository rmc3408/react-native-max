import { useContext, useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Card from '../components/Card';
import Guess from '../components/Guess';
import PrimaryBtn from '../components/PrimaryBtn';
import Title from '../components/Title';
import { NumberCtx } from '../context/NumContext';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/GuessLogItem';

let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = (props) => {
  const userChoosen = useContext(NumberCtx);
  const initialGuess = generateRandomBetween(1, 100, userChoosen);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [totalRounds, setTotalrounds] = useState([initialGuess]);

  function nextGuessing(direction) {
    if (
      (direction === 'low' && currentGuess < userChoosen) ||
      (direction === 'high' && currentGuess > userChoosen)
    ) {
      Alert.alert('LIE', 'wrong direction', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'low') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    //console.info(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
    setTotalrounds((prevSt) => [newGuess, ...prevSt]);
  }

  function checkGameOver() {
    if (currentGuess == userChoosen) {
      props.onSetTotalRounds(totalRounds.length);
      return true;
    }
    return false;
  }

  useEffect(() => {
    const isGameOver = checkGameOver();
    if (isGameOver) {
      props.onSetGameOver(true);
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess, props.onSetGameOver]);

  const attempt = totalRounds.length;

  const { height, width } = useWindowDimensions();
  const marginVerticalDevice = height > 360 ? 30 : 2;

  let content = (
    <>
      <Guess guess={currentGuess} />
      <Card>
        <Text style={styles.instructionText}>Higher or Lower ?</Text>
        <View style={styles.btnContainer}>
          <PrimaryBtn onPressing={nextGuessing.bind(this, 'low')}>
            <Ionicons name="md-remove" size={24} color={'black'} />
          </PrimaryBtn>
          <PrimaryBtn onPressing={nextGuessing.bind(this, 'high')}>
            <Ionicons name="md-add" size={24} color={'black'} />
          </PrimaryBtn>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.btnGroupContainerWide}>
          <View style={styles.btnContainerWide}>
            <PrimaryBtn onPressing={nextGuessing.bind(this, 'low')}>
              <Ionicons name="md-remove" size={32} color={'black'} />
            </PrimaryBtn>
          </View>
          <Guess guess={currentGuess} />
          <View style={styles.btnContainerWide}>
            <PrimaryBtn onPressing={nextGuessing.bind(this, 'high')}>
              <Ionicons name="md-add" size={32} color={'black'} />
            </PrimaryBtn>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={[styles.screen, { paddingVertical: marginVerticalDevice }]}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={totalRounds}
          keyExtractor={(g) => g}
          renderItem={(obj) => (
            <GuessLogItem round={attempt - obj.index} number={obj.item} />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 22,
    color: 'lightyellow',
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  btnGroupContainerWide: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  btnContainerWide: {
    flex: 1/3,
  },
  listContainer: {
    width: '80%',
    paddingVertical: 10,
  },
});

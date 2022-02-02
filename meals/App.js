import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loading] = useFonts({
    'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'lastCall': require('./assets/fonts/TheLastCall-Regular.ttf'),
  });

  if (!loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAIN PAGE</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontFamily: 'lastCall',
    fontSize: 28,
  }
});

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import color from '../constant/color';


const Header = ({ title }) => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{ title }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 90,
      paddingTop: 36,
      backgroundColor: color.primary,
  },
  headerTitle: {
      color: color.black,
      fontSize: 18,
  }
});

export default Header;




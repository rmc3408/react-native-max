import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TitleText1 } from '../styles/Text';
import color from '../constant/color';
import defStyles from '../constant/def-styles';
import StyledButton from '../styles/Button';

const End = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText1>Game Over</TitleText1>
            <View style={styles.imgContainer}>
                <Image
                    fadeDuration={900}
                    //source={require('../assets/success.png')}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80',
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <Text style={defStyles.body, styles.align}>
                    Your phone needed <Text style={defStyles.highlight}>{props.totalRounds}</Text> rounds to win and user choice was <Text style={defStyles.highlight}>{props.userChoice}</Text>.
                </Text>
            </View>
            <StyledButton onPress={props.onRestart}>New Game</StyledButton>
        </View>
    );
};

export default End;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultContainer: {
        paddingHorizontal: 30,
        marginVertical: 24,
    },
    align: {
        textAlign: 'center',
        fontSize: 20,
    },
    imgContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: color.black,
        borderWidth: 2,
        overflow: 'hidden',
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

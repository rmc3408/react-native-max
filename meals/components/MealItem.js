import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import React from 'react';
import defStyles from '../defStyles';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectedMeal}>
                <View>
                    <View style={{ ...styles.mealrow, ...styles.mealHeader }}>
                        <ImageBackground source={{uri: props.imageUrl}} resizeMode="cover" style={styles.image} >
                        <Text style={styles.title} numberOfLines={1} >{props.title} </Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealrow, ...styles.mealDetail }}>
                        <Text style={defStyles.text}>{props.duration}</Text>
                        <Text style={defStyles.text}>{props.complexibility.toUpperCase()}</Text>
                        <Text style={defStyles.text}>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealrow: {
        flexDirection: 'row',
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginVertical: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        height: '15%',
    },
    title: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        fontFamily: 'openSansB',
        color: 'white',
        fontSize: 22,
        backgroundColor: 'rgba(0,0,0,0.6)',
        textAlign: 'center',

    }
});

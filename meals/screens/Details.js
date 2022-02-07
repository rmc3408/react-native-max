import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useLayoutEffect } from 'react';
import defStyles from '../defStyles';

const Details = (props) => {
    const data = props.route.params;

    useLayoutEffect(() => {
        props.navigation.setOptions({ title: data.title });
    }, []);

    return (
        <ScrollView>
            <Image source={{uri: data.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <Text style={defStyles.text}>{data.duration} min</Text>
                <Text style={defStyles.text}>{data.complexibility.toUpperCase()}</Text>
                <Text style={defStyles.text}>{data.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.titles}>Ingredients</Text>
            {data.ingredients.map((ing)=> <Text key={ing}>- {ing}</Text> )}
            <Text style={styles.titles}>Steps</Text>
            {data.steps.map((ing)=> <Text key={ing}>-> {ing}</Text> )}
            
            {/* <View style={defStyles.container}>
                <Text style={defStyles.title}>{data.title}</Text>
                <Button title="Go AGAIN to details" onPress={() => props.navigation.push('Details')} />
                <Button title="Go back" onPress={() => props.navigation.goBack()} />
                <Button title="Go to Categories" onPress={() => props.navigation.popToTop()} />
            </View> */}
        </ScrollView>
    );
};

export default Details;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 220,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    titles: {
        fontFamily: 'openSansB',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

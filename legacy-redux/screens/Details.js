import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import defStyles from '../defStyles';

const Details = (props) => {
    const data = props.route.params;

    const { navigation: { setOptions, setParams }} = props;
    useLayoutEffect(() => {
        setOptions({ title: data.title });
        setParams({ id: data.id });
    }, [setOptions, setParams]);

    return (
        <ScrollView>
            <Image source={{ uri: data.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text style={defStyles.text}>{data.duration} min</Text>
                <Text style={defStyles.text}>{data.complexibility.toUpperCase()}</Text>
                <Text style={defStyles.text}>{data.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.titles}>Ingredients</Text>
            {data.ingredients.map((ing) => (
                <Text key={ing}>- {ing}</Text>
            ))}
            <Text style={styles.titles}>Steps</Text>
            {data.steps.map((ing) => (
                <Text key={ing}>-> {ing}</Text>
            ))}
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
        textAlign: 'center',
    },
});

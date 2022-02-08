import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { Switch } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import Colors from '../Colors';
import { useSelector } from 'react-redux';


const Filters = (props) => {
    const [gluten, setGluten] = useState(false);
    const [lactose, setLactose] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [veggie, setVeggie] = useState(false);

    const saveFilters = useCallback(() => {
        const choices = {
            gluten,
            lactose,
            vegan,
            veggie,
        };
        console.log(choices);
    }, [gluten, lactose, vegan, veggie]);

    const { navigation } = props;
    useEffect(() => {
        navigation.setParams({
            save: saveFilters,
        });
    }, [saveFilters]);

    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <Text style={styles.titles}>Avaliable FILTERS</Text>
                <View style={styles.filContainer}>
                    <Text>Gluten-free</Text>
                    <Switch
                        value={gluten}
                        onValueChange={(n) => setGluten(n)}
                        ios_backgroundColor="#fff"
                        trackColor={{ true: Colors.primary }}
                    />
                </View>
                <View style={styles.filContainer}>
                    <Text>Lactose-free</Text>
                    <Switch
                        value={lactose}
                        onValueChange={(n) => setLactose(n)}
                        ios_backgroundColor="#fff"
                        trackColor={{ true: Colors.primary }}
                    />
                </View>
                <View style={styles.filContainer}>
                    <Text>Vegan-free</Text>
                    <Switch
                        value={vegan}
                        onValueChange={(n) => setVegan(n)}
                        ios_backgroundColor="#fff"
                        trackColor={{ true: Colors.primary }}
                    />
                </View>
                <View style={styles.filContainer}>
                    <Text>Vegetarian</Text>
                    <Switch
                        value={veggie}
                        onValueChange={(n) => setVeggie(n)}
                        ios_backgroundColor="#fff"
                        trackColor={{ true: Colors.primary }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Filters;

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
    },
    filContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        width: '80%',
        marginVertical: 10,
    },
    titles: {
        fontFamily: 'openSansB',
        textAlign: 'center',
        margin: 20,
        fontSize: 24,
    },
});

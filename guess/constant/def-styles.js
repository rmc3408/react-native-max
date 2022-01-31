import { StyleSheet } from "react-native";
import color from "./color";

export default StyleSheet.create({
    body: {
        fontFamily: 'osans',
    },
    title: {
        fontFamily: 'osans-b',
        fontSize: 18,
        color: 'red'
    },
    highlight: {
        fontFamily: 'osans-b',
        color: color.primary,
    }
})
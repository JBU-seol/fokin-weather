import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";
import { Feather } from '@expo/vector-icons';

export default function Weather({ condition, temp }) {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Feather name="sun" size={92} color="black" />
                <Text style={styles.text}>날씨:{condition}</Text>
                <Text style={styles.text}>온도:{temp}도</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>  By Seulki </Text>
            </View>
        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes
        .oneOf([
            "Thunderstorm",
            "Clear",
            "Rain",
            "Clouds",
            "Drizzle",
            "Snow",
            "Haze",
            "Mist",
            "Smoke"
        ])
        .isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 24
    }
})



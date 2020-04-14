import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm : {
        iconName : "weather-lightning",
        krName : "천둥번개",
        bgColor: ["#3C3B3F","#605C3C"],
        title: "Lightning",
        subtitle: "Be careful !"
    },
    Clear : {
        iconName : "weather-sunny",
        krName: "맑음",
        bgColor: ["#f5af19","#f12711"],
        title: "Sunny",
        subtitle: "Happy day !"
    },
    Rain : {
        iconName: "weather-pouring",
        KrName: "비",
        bgColor:["#4e54c8","#8f94fb"],
        title: "Rainy",
        subtitle: "Take a umbrella !"
    },
    Clouds : {
        iconName: "weather-partlycloudy",
        KrName: "구름 많음",
        bgColor:["#203A43","#2C5364"],
        title: "Cloudy",
        subtitle: "Bad weather !"
    },
    Drizzle : {
        iconName: "weather-rainy",
        KrName: "이슬비",
        bgColor:["#00B4DB","#0083B0"],
        title: "Little Rainy",
        subtitle: "That is my sister !"
    },
    Snow : {
        iconName: "weather-snowy",
        KrName: "눈",
        bgColor:["#6190E8","#A7BFE8"],
        title: "Snow",
        subtitle: "Go out for making a snowman !"
    },
    Smoke : {
        iconName: "weather-cloudy",
        KrName: "안개",
        bgColor:["#636363","#a2ab58"],
        title: "Smoky ",
        subtitle: "Be careful on driving !"
    }
}

export default function Weather({ condition, temp }) {
    return (
        <LinearGradient style={styles.container}
            colors={weatherOptions[condition].bgColor}
        >
            <StatusBar barStyle="light-content" hidden={false}/>
            <View style={styles.halfContainer}>
                <Text style={styles.text}>오늘의 날씨</Text>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={90} color="white"/>
                <Text style={styles.text}>{weatherOptions[condition].krName}</Text>
                <Text style={styles.text}>{temp}℃</Text>
            </View>

            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
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
        fontSize: 24,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "100",
        marginBottom: 10
      },
      subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
      },
      textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
      }
})



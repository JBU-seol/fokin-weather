import React from "react";
import {Alert} from "react-native";
import * as Location from "expo-location";
import Loading from "./Loading"
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "cb20dff6564d5c4ff06caf30ae472fa5"

export default class extends React.Component {
  state = {
    isLoading : true
  }
  getWeather = async(latitude, longitude) => {
    const {data: { main: {temp} , weather }} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
    this.setState({ isLoading: false, condition: weather[0].main, temp: temp })
  }

  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);

    } catch(error){
      Alert.alert("Can't find you", "So Sad");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render() {
    const {isLoading, condition, temp} = this.state;
    return isLoading ? <Loading /> : <Weather condition={condition} temp={Math.round(temp)}/>;
  }
}



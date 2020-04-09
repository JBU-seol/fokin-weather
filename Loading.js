import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:30}}> Getting the Weather .. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // 레이아웃을 flex로 조정하는걸 권장.
      padding: 24,
      backgroundColor: "#eaeaea",
      flexDirection:'column',//or "row"
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });
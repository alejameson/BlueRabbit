import React from "react";
import { View, Text, TextInput } from "react-native";
/* import { useFonts } from "expo-font/build/FontHooks"; */

export function ExplorarScreen() {
  /* const [fontsLoaded] = useFonts({
    'ProximaNovaRg': require('../assets/fonts/ProximaNova-Regular.otf'),
  }); */
  return (
    <View>
      <Text
        style={{
          /* fontFamily: "ProximaNovaRg", */
          fontSize: 35,
          textAlign: "left",
          marginTop: "25%",
          marginLeft: "3%",
          marginBottom: "5%",
          width: "60%", 
        }}
      >
        Buscador de Facuamigos
      </Text>
      <TextInput style={{backgroundColor: "white", width: 353, height: 30, marginLeft: "3%", paddingLeft:"3%", borderRadius: 27}} placeholder="¿A quien queres conocer?" placeholderTextColor="black" />
    </View>
  );
}

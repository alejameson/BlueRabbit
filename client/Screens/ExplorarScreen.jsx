import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ListUsers from "../components/ListUsers";
import DATA from "../UnivMock";
import USERS from "../UsersMock";
/* import { useFonts } from "expo-font/build/FontHooks"; */

export function ExplorarScreen() {
  const [users, setUsers] = useState([]);
  /* const [fontsLoaded] = useFonts({
    'ProximaNova': require('../assets/fonts/ProximaNova-Regular.otf'),
  }); */
  useEffect(() => {
    if(users.length === 0 ){
      setUsers(USERS.slice(0,10));
    };
  }, [users]);

  const onConnect = (id) => {
    setUsers(users.filter(connectUser => connectUser.id !== id));
  };
  
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
          fontWeight: "bold",
        }}
      >
        Buscador de Facuamigos
      </Text>
      <TextInput
        style={{
          backgroundColor: "white",
          width: 353,
          height: 30,
          marginLeft: "3%",
          paddingLeft: "3%",
          borderRadius: 27,
        }}
        placeholder="¿A quien queres conocer?"
        placeholderTextColor="black"
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal
        scrollba
        showsHorizontalScrollIndicator={false}
      >
        {DATA.map((u) => (
          <View style={styles.uniCard} key={u.key}>
            <Image source={u.background} style={styles.image} />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              {u.title}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Text
        style={{
          /* fontFamily: "ProximaNovaRg", */
          fontSize: 25,
          textAlign: "left",
          marginTop: "7%",
          marginLeft: "3%",
          marginBottom: "4%",
          width: "70%",
          fontWeight: "bold",
        }}
      >
        Recomendado para vos
      </Text>
      <FlatList
        data={users.slice(0,10)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ListUsers item={item} onConnect={onConnect}/>;
        }}
        contentContainerStyle={{flexGrow: 1, height: "auto", paddingBottom: 440, display: "flex", justifyContent:"center"}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  uniContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  uniCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 145,
    height: 46,
    backgroundColor: "black",
    color: "white",
    margin: 10,
    marginTop: 40,
    marginVertical: 45,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 15,
    opacity: 0.5,
  },
});

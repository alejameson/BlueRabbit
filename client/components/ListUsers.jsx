import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

const ListUsers = ({ item, onConnect }) => {
  const { name, univ, area, year, background, id } = item;
  const userIcon = {
    uri: "https://cdn-icons-png.flaticon.com/512/219/219986.png",
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: background,
          width: 347,
          height: 31,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      ></View>
      <Image source={userIcon} style={styles.image} />
      <Text style={{ fontSize: 20, fontWeight: "bold", left: 19 }}>{name}</Text>
      <Pressable style={styles.button} onPress={() => onConnect(id)}>
        <Text style={{color: "white"}}>+ Conectar</Text>
      </Pressable>
      <View style={styles.detailUser}>
        <Text style={{marginLeft: 20, backgroundColor: "#EFEFEF", borderRadius: 15, paddingHorizontal: 5, fontSize: 14}}>{univ}</Text>
        <Text style={{marginLeft: 5, backgroundColor: "#EFEFEF", borderRadius: 15, paddingHorizontal: 5, fontSize: 13}}>{area}</Text>
        <Text style={{marginLeft: 5, backgroundColor: "#EFEFEF", borderRadius: 15, paddingHorizontal: 5, fontSize: 13}}>{year}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347,
    height: 165,
    backgroundColor: "white",
    margin: "3%",
    borderRadius: 17,
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 37,
    position: "relative",
    left: 19,
    bottom: 13,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 213,
    bottom: 44,
    width: 114,
    height: 27,
    borderRadius: 8,
    backgroundColor: '#3B79FA',
  },
  detailUser: {
    display: "flex",
    flexDirection: "row",
    bottom: 15
  }
});

export default ListUsers;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

/* screens */
import { HomeScreen } from "./Screens/HomeScreen";
import { ExplorarScreen } from "./Screens/ExplorarScreen";
import { NotificacionesScreen } from "./Screens/NotificacionesScreen";
import { PerfilScreen } from "./Screens/PerfilScreen";
import { AddScreen } from "./Screens/AddScreen";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Explorar"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: { backgroundColor: "#DFE8FF", height: 78.16, padding: 10, margin: 0, paddingBottom: 11 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Explorar"
        component={ExplorarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="binoculars" size={28} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name=" "
        component={AddScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="circle-with-plus" size={38} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notificaciones"
        component={NotificacionesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={29} color="black" />
          ),
        }}
      />
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={35} color="black" />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

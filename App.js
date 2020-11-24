import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import LoggedOut from "./app/views/LoggedOut"
import ButtonIcon from "./app/components/ButtonIcon"
import Dashboard from "./app/views/Dashboard"
import Contacts from "./app/views/Contacts"
import New from "./app/views/NewSongPact"
import Notifications from "./app/views/Notifications"
import Menu from "./app/views/Menu"
import AppNavigator from "./app/navigation/AppNavigator"
import SignIn from "./app/views/SignIn"

const Tab = createBottomTabNavigator()

export default function App({ navigation }) {
  return <SignIn />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#30BCED",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

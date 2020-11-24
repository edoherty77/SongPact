import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import AppNavigator from "./app/navigation/AppNavigator"
import SignIn from "./app/views/SignInScreen"

const Tab = createBottomTabNavigator()

export default function App({ navigation }) {
  return (
    <>
      {/* <SignIn /> */}
      <AppNavigator />
      <StatusBar style={"light"} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#30BCED",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import AppNavigator from "./app/navigation/AppNavigator"
import SignIn from "./app/views/SignInScreen"
import SignUp from "./app/views/SignUpScreen"
import Dashboard from "./app/views/DashboardScreen"

const Tab = createBottomTabNavigator()

export default function App({ navigation }) {
  return (
    <>
      {/* <AppNavigator /> */}
      {/* <SignIn /> */}
      <Dashboard />
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

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../views/LoginScreen"
import RegisterScreen from "../views/RegisterScreen"
import TestMobX from "../views/TestMobX"

const Stack = createStackNavigator()

const AuthNavigator = ({ store }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={RegisterScreen} />
      <Stack.Screen name="Mobx" component={TestMobX} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

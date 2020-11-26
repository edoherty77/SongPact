import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import LoginScreen from "../views/LoginScreen"
import SignUpScreen from "../views/RegisterScreen"

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

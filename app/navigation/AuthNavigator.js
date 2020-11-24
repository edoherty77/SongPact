import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SignInScreen from "../views/SignInScreen"
import SignUpScreen from "../views/SignUpScreen"

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

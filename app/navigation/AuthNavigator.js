import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "../views/SignInScreen"
import SignUp from "../views/SignUpScreen"

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

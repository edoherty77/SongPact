import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import SignInScreen from "../views/Auth/SignInScreen"
import SignUpScreen from "../views/Auth/SignUpScreen"
import TestMobX from "../views/TestMobX"
import AppSignIn from "../views/Auth/AppSignIn"
import AppSignUp from "../views/Auth/AppSignUp"
import ConfirmSignUp from "../views/Auth/ConfirmSignUp"

const Stack = createStackNavigator()

const AuthNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn">
        {(screenProps) => (
          <AppSignIn {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </Stack.Screen>
      <Stack.Screen name="SignUp" component={AppSignUp} />
      <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

{
  /* <Stack.Screen name="SignIn" component={SignInScreen} />
<Stack.Screen name="SignUp" component={SignUpScreen} /> */
}

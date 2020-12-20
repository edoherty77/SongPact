import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import AppSignIn from "../views/Auth/AppSignIn"
import AppSignUp from "../views/Auth/AppSignUp"
import ConfirmSignUp from "../views/Auth/ConfirmSignUp"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator()

const AuthNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn">
          {(screenProps) => (
            <AppSignIn
              {...screenProps}
              updateAuthState={props.updateAuthState}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="SignUp" component={AppSignUp} />
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigator

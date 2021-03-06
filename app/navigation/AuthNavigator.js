import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import AppSignIn from "../views/Auth/AppSignIn"
import AppSignUp1 from "../views/Auth/AppSignUp1"
import AppSignUp2 from "../views/Auth/AppSignUp2"
import AppSignUp3 from "../views/Auth/AppSignUp3"
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
        <Stack.Screen name="SignUp1" component={AppSignUp1} />
        <Stack.Screen name="SignUp2" component={AppSignUp2} />
        <Stack.Screen name="SignUp3" component={AppSignUp3} />
        <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigator

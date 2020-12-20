import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import BottomTabs from "./BottomTabs"

import Dashboard from "../views/Main/DashboardScreen"

const Stack = createStackNavigator()

export default function DashboardStack({ updateAuthState }) {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Dashboard">
        {(screenProps) => (
          <BottomTabs {...screenProps} updateAuthState={updateAuthState} />
        )}
      </Stack.Screen>
      {/* component={BottomTabs} /> */}
    </Stack.Navigator>
  )
}

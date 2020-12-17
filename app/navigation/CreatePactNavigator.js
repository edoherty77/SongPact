import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
// import AppNavigator from "./AppNavigator"

import New from "../views/Main/NewSongPactScreen"
import First from "../views/CreatePact/First"
import Second from "../views/CreatePact/Second"

const Stack = createStackNavigator()

const CreatePactNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Dashboard" component={AppNavigator} /> */}
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Second" component={Second} />
    </Stack.Navigator>
  )
}

export default CreatePactNavigator

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import New from "../views/Main/NewSongPactScreen"
import First from "../views/CreatePact/First"
import Third from "../views/CreatePact/Third"
import Fourth from "../views/CreatePact/Fourth"
import Second from "../views/CreatePact/Second"
import Last from "../views/CreatePact/Last"
import ReviewAndSign from "../views/CreatePact/ReviewAndSign"

const Stack = createStackNavigator()

const CreatePactStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName="First"
      headerMode="screen"
    >
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="First" component={First} />
      <Stack.Screen name="Second" component={Second} />
      <Stack.Screen name="Third" component={Third} />
      <Stack.Screen name="Fourth" component={Fourth} />
      <Stack.Screen name="Last" component={Last} />
      <Stack.Screen name="ReviewAndSign" component={ReviewAndSign} />
    </Stack.Navigator>
  )
}

export default CreatePactStack

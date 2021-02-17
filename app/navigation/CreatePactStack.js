import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import New from '../views/Main/NewSongPactScreen'
import {
  First,
  Collabs,
  Producer,
  ProducerInfo,
  // Second,
  // Third,
  // Fourth,
  Last,
  ReviewAndSign,
} from '../views/CreatePact/index'

const Stack = createStackNavigator()

const CreatePactStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName="First"
      headerMode="screen"
    >
      <Stack.Screen name="New" component={New} />
      {/* <Stack.Screen name="First" component={First} /> */}
      <Stack.Screen name="Collabs" component={Collabs} />
      <Stack.Screen name="Producer" component={Producer} />
      <Stack.Screen name="ProducerInfo" component={ProducerInfo} />
      {/* <Stack.Screen name="Second" component={Second} /> */}
      {/* <Stack.Screen name="Third" component={Third} /> */}
      {/* <Stack.Screen name="Fourth" component={Fourth} /> */}
      <Stack.Screen name="Last" component={Last} />
      <Stack.Screen name="ReviewAndSign" component={ReviewAndSign} />
    </Stack.Navigator>
  )
}

export default CreatePactStack

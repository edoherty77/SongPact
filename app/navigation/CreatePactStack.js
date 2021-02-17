import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import New from '../views/Main/NewSongPactScreen'
import {
  First,
  Collabs,
  Producer,
  ProducerInfo,
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
      <Stack.Screen name="Collabs" component={Collabs} />
      <Stack.Screen name="Producer" component={Producer} />
      <Stack.Screen name="ProducerInfo" component={ProducerInfo} />
      <Stack.Screen name="Last" component={Last} />
      <Stack.Screen name="ReviewAndSign" component={ReviewAndSign} />
    </Stack.Navigator>
  )
}

export default CreatePactStack

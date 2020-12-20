import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabs from './BottomTabs'

import Dashboard from '../views/Main/DashboardScreen'

const Stack = createStackNavigator()

export default function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Dashboard" component={BottomTabs} />
    </Stack.Navigator>
  )
}

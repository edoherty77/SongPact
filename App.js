import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AppNavigator from './app/navigation/AppNavigator'
import UserContext from './app/context/userContext'
import AuthNavigator from './app/navigation/AuthNavigator'

const Tab = createBottomTabNavigator()

export default function App({ navigation }) {
  const [user, setUser] = useState(false)

  useEffect(() => {
    user
  }, [user])
  return (
    <>
      <NavigationContainer>
        <UserContext.Provider value={{ setUser: setUser }}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </UserContext.Provider>
      </NavigationContainer>
      <StatusBar style={'light'} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30BCED',
  },
})

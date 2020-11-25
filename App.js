import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// import { GET_ALL_USERS } from './app/src/graphql/Queries'
// import { client } from './app/src/graphql/Client'

import AppNavigator from './app/navigation/AppNavigator'
import SignIn from './app/views/SignInScreen'
import SignUp from './app/views/SignUpScreen'
import Dashboard from './app/views/DashboardScreen'
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

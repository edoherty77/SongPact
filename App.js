import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useQuery } from '@apollo/react-hooks'

import AppNavigator from './app/navigation/AppNavigator'
import UserContext from './app/context/userContext'
import AuthNavigator from './app/navigation/AuthNavigator'

import GET_ALL_USERS from './app/src/graphql/Queries'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import DashboardScreen from './app/views/DashboardScreen'

const client = new ApolloClient({
  uri: 'http://192.168.1.8:4000/graphql',
  cache: new InMemoryCache(),
})

export default function App({ navigation }) {
  const [user, setUser] = useState(false)

  useEffect(() => {
    user
  }, [user])

  return (
    <>
      <NavigationContainer>
        {/* <ApolloProvider client={client}> */}
        {/* <UserContext.Provider value={{ setUser: setUser }}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </UserContext.Provider> */}
        <AppNavigator />

        {/* </ApolloProvider> */}
      </NavigationContainer>
      <StatusBar style={'light'} />
    </>
  )
}

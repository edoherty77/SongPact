import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'

// AMPLIFY & AUTH
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true, // kills unhandled promise warning
  },
})
import { withAuthenticator } from 'aws-amplify-react-native'

// NAV
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './app/navigation/AppNavigator'
import AuthNavigator from './app/navigation/AuthNavigator'

// DATA FLOW
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApolloProvider } from '@apollo/client'
import { client } from './app/src/graphql/Client'

function App({ navigation }) {
  const [user, setUser] = useState(null)

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      if (!user) {
        setUser(null)
      }
      setUser(user.attributes)
      // TODO remove or move to user store
      // look for user ID that matches sub ID
      // if found
      // return foundUser data
      // store foundUser data in state store
      // if not found
      // create newUser entry with ID == sub
      // store newUser data in state
    } catch (error) {
      console.log(error)
    }
  }

  if (user) {
    console.log('user///', user)
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </ApolloProvider>
      <StatusBar style={'auto'} />
    </>
  )
}

export default App
// export default withAuthenticator(App)

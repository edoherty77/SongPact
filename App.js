import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"

// AMPLIFY & AUTH
import Amplify, { Auth } from "aws-amplify"
import awsconfig from "./aws-exports"
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true, // kills unhandled promise warning
  },
})
import { withAuthenticator } from "aws-amplify-react-native"

// NAV
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./app/navigation/AppNavigator"

// DATA FLOW
import AsyncStorage from "@react-native-community/async-storage"
import { ApolloProvider } from "@apollo/client"
import { client } from "./app/src/graphql/Client"
import store from "./app/stores/TestStore"

function App({ navigation }) {
  const getCurrentUser = async () => {
    try {
      const data = await Auth.currentAuthenticatedUser()
      store.setUser(data.attributes) // TODO remove or move to user store
      // look for user ID that matches sub ID
      // if found
      // return foundUser data
      // store foundUser data in state store
      // if not found
      // create newUser entry with ID == sub
      // store newUser data in state
      await AsyncStorage.setItem("sub", store.sub)
    } catch (error) {
      console.log(error)
    }
  }

  const getLocalSub = async () => {
    try {
      let subString = await AsyncStorage.getItem("sub")
      console.log("subString: ", subString)
    } catch (error) {
      console.log(error)
    }
  }

  if (store.email) {
    console.log("signed in as: ", store.email)
    getLocalSub()
  }

  useEffect(() => {
    getCurrentUser()
  }, [store])

  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApolloProvider>
      <StatusBar style={"auto"} />
    </>
  )
}

export default withAuthenticator(App)

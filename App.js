import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native"

// AMPLIFY
import Amplify, { Auth } from "aws-amplify"
import awsconfig from "./aws-exports"
Amplify.configure(awsconfig)
import { withAuthenticator } from "aws-amplify-react-native"

import AppNavigator from "./app/navigation/AppNavigator"
import UserContext from "./app/context/userContext"
import AuthNavigator from "./app/navigation/AuthNavigator"

import { ApolloProvider } from "@apollo/client"
import { client } from "./app/src/graphql/Client"

import DashboardScreen from "./app/views/DashboardScreen"

function App({ navigation }) {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
  })

  const checkForUser = async () => {
    try {
      const localUser = await AsyncStorage.getItem("firstName")
      const localEmail = await AsyncStorage.getItem("firstName")

      if (localUser) {
        setUser({
          firstName: localUser,
          email: localEmail,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkForUser
  }, [user.email])

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

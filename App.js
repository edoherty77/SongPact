import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"

// AMPLIFY & AUTH
import Amplify, { Auth } from "aws-amplify"
import awsconfig from "./aws-exports"
Amplify.configure(awsconfig)
import { withAuthenticator } from "aws-amplify-react-native"

// NAV
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./app/navigation/AppNavigator"

// DATA FLOW
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ApolloProvider } from "@apollo/client"
import { client } from "./app/src/graphql/Client"

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

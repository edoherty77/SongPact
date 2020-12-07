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
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ApolloProvider } from "@apollo/client"
import { client } from "./app/src/graphql/Client"

function App({ navigation }) {
  const [user, setUser] = useState(null)

  const verify = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user.attributes)
    } catch (error) {
      console.log(error)
    }
  }

  if (user) {
    console.log("user///", user)
  }

  useEffect(() => {
    verify()
  }, [])

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

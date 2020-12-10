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
import AuthNavigator from "./app/navigation/AuthNavigator"

// DATA FLOW
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ApolloProvider } from "@apollo/client"
import { client } from "./app/src/graphql/Client"
import store from "./app/stores/TestStore"
import { observer } from "mobx-react"

const App = observer(({ navigation }) => {
  const [sub, setSub] = useState(null)

  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      store.setUser(user.attributes)
      setSub(store.sub)
      // TODO remove or move to user store
      // look for user ID that matches sub ID
      // if found
      // return foundUser data
      // store foundUser data in state store
      // if not found
      // create newUser entry with ID == sub
      // store newUser data in state
      // await AsyncStorage.setItem("sub", store.sub)
    } catch (error) {
      console.log(error)
    }
  }

  // TODO remove
  if (sub) {
    console.log("user///", sub)
  }

  useEffect(() => {
    getCurrentUser()
  }, [store.sub])

  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          {sub ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </ApolloProvider>
      <StatusBar style={"auto"} />
    </>
  )
})

export default App
// export default withAuthenticator(App)

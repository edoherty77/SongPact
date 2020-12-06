import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native"

import AppNavigator from "./app/navigation/AppNavigator"
import UserContext from "./app/context/userContext"
import AuthNavigator from "./app/navigation/AuthNavigator"

import { ApolloProvider } from "@apollo/client"
import { GET_ALL_USERS } from "./app/src/graphql/Queries"
import { client } from "./app/src/graphql/Client"

export default function App({ navigation }) {
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
          <UserContext.Provider value={{ setUser: setUser }}>
            {user.email ? <AppNavigator /> : <AuthNavigator />}
          </UserContext.Provider>
        </NavigationContainer>
      </ApolloProvider>
      <StatusBar style={"auto"} />
    </>
  )
}

import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"

import AppNavigator from "./app/navigation/AppNavigator"
import UserContext from "./app/context/userContext"
import AuthNavigator from "./app/navigation/AuthNavigator"

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
      <StatusBar style={"light"} />
    </>
  )
}

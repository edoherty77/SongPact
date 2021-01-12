import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, View } from "react-native"
import { FormProvider } from "./app/context/form-context"
import { SafeAreaProvider } from "react-native-safe-area-context"

// AMPLIFY & AUTH
import Amplify, { API, Auth, graphqlOperation } from "aws-amplify"
import awsconfig from "./aws-exports"
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true, // kills unhandled promise warning
  },
})

// NAV
import AuthNavigator from "./app/navigation/AuthNavigator"
import Main from "./app/navigation/main"

// DATA FLOW
import store from "./app/stores/UserStore"
import { observer } from "mobx-react"
import { getUser } from "./app/src/graphql/Queries"

const Initializing = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  )
}

const App = observer(() => {
  const [isUserLoggedIn, setUserLoggedIn] = useState("initializing")

  const checkAuthState = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      console.log("✅ User is signed in")
      console.log(user.username)
      setUserLoggedIn("loggedIn")
    } catch (error) {
      console.log("❌ User is not signed in")
      // store.resetUser()
      setUserLoggedIn("loggedOut")
    }
  }

  const updateAuthState = (isUserLoggedIn) => {
    setUserLoggedIn(isUserLoggedIn)
  }

  useEffect(() => {
    checkAuthState()
  }, [])

  return (
    <>
      <SafeAreaProvider>
        {/* <AppearanceProvider> */}
        <FormProvider>
          {isUserLoggedIn === "initializing" && <Initializing />}
          {isUserLoggedIn === "loggedIn" && (
            <Main updateAuthState={updateAuthState} />
          )}
          {isUserLoggedIn === "loggedOut" && (
            <AuthNavigator updateAuthState={updateAuthState} />
          )}
        </FormProvider>
        {/* </AppearanceProvider> */}
      </SafeAreaProvider>
      <StatusBar style={"auto"} />
    </>
  )
})

export default App

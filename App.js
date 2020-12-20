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
import { FormProvider } from './app/context/form-context'
import AuthNavigator from './app/navigation/AuthNavigator'
import Main from './app/navigation/main'

// DATA FLOW

import store from './app/stores/TestStore'
import { observer } from 'mobx-react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

// import { AppearanceProvider } from 'react-native-appearance'

const App = observer(({ navigation }) => {
  const getCurrentUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
      store.setUser(user.attributes)
      // setSub(store.sub)
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

  useEffect(() => {
    getCurrentUser()
  }, [store.sub])

  return (
    <>
      <SafeAreaProvider>
        {/* <AppearanceProvider> */}
        <FormProvider>{store.sub ? <Main /> : <AuthNavigator />}</FormProvider>
        {/* </AppearanceProvider> */}
      </SafeAreaProvider>
      <StatusBar style={'auto'} />
    </>
  )
})

// export default App
export default withAuthenticator(App)

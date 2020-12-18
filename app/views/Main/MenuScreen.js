import { Auth } from "aws-amplify"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AppText from "../../components/AppText"
import Header from "../../components/Header"
import Screen from "../../components/Screen"
import store from "../../stores/TestStore"

export default function MenuScreen({ updateAuthState }) {
  const signOut = async () => {
    try {
      await Auth.signOut()
      store.resetUser()
      updateAuthState("loggedOut")
    } catch (error) {
      console.log("error signing out: ", error)
    }
  }

  return (
    <Screen>
      <Header title="Menu" />
      <View style={styles.menuContainer}>
        <AppText style={styles.menuItem}>My Info</AppText>
        <AppText style={styles.menuItem}>How It Works</AppText>
        <AppText style={styles.menuItem}>Help</AppText>
        <AppText style={styles.menuItem}>Prefs</AppText>
        <AppText style={styles.menuItem} onPress={signOut}>
          Sign Out
        </AppText>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuItem: {
    fontSize: 24,
    marginBottom: 20,
  },
})

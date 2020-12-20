import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Auth } from "aws-amplify"

import AppButton from "../../components/AppButton"
import AppText from "../../components/AppText"
import AppTextInput from "../../components/AppTextInput"

export default function ConfirmSignUp({ navigation }) {
  const [username, setUsername] = useState("")
  const [authCode, setAuthCode] = useState("")

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, authCode)
      console.log("✅ Code confirmed")
      navigation.navigate("SignIn")
    } catch (error) {
      console.log(
        "❌ Verification code does not match. Please enter a valid verification code.",
        error.code
      )
    }
  }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <AppText style={styles.title}>Confirm Sign Up</AppText>
        <AppTextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          leftIcon="account"
          placeholder="Enter username"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          value={authCode}
          onChangeText={(text) => setAuthCode(text)}
          leftIcon="numeric"
          placeholder="Enter verification code"
          keyboardType="numeric"
        />
        <AppButton title="Confirm Sign Up" onPress={confirmSignUp} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#202020",
    fontWeight: "500",
    marginVertical: 15,
  },
})

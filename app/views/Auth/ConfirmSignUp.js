import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Auth } from "aws-amplify"

import AppButton from "../../components/AppButton"
import AppText from "../../components/AppText"
import AppTextInput from "../../components/AppTextInput"
import Screen from "../../components/Screen"
import { KeyboardAvoidingView } from "react-native"
import { Platform } from "react-native"
import Header from "../../components/Header"
import colors from "../../config/colors"

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
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header title="Sign Up" noIcon />
        <View style={styles.mainView}>
          <AppText style={styles.title}>Confirm Sign Up</AppText>
          <AppTextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
            leftIcon="account"
            placeholder="Enter username"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppTextInput
            style={styles.input}
            value={authCode}
            onChangeText={(text) => setAuthCode(text)}
            leftIcon="numeric"
            placeholder="Enter verification code"
            keyboardType="numeric"
          />
          <AppButton
            style={styles.signUpButton}
            title="Confirm Sign Up"
            onPress={confirmSignUp}
          />
        </View>
      </KeyboardAvoidingView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#202020",
    fontWeight: "500",
    marginVertical: 15,
  },
  input: {
    width: "80%",
    backgroundColor: "rgba(250, 250, 250, 0.8)",
    fontSize: 18,
    paddingLeft: 20,
    height: 35,
    borderRadius: 15,
  },
  signUpButton: {
    marginTop: 20,
    borderRadius: 50,
    width: "50%",
    height: 40,
    backgroundColor: colors.red,
  },
})

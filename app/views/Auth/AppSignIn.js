import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Auth } from "aws-amplify"
import Screen from "../../components/Screen"
import Header from "../../components/Header"
import AppTextInput from "../../components/AppTextInput"
import AppButton from "../../components/AppButton"
import { TouchableOpacity } from "react-native"

export default function AppSignIn({ navigation, updateAuthState }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function signIn() {
    try {
      await Auth.signIn(username, password)
      console.log("success")
      updateAuthState("loggedIn")
    } catch (err) {
      console.log("Error signing in...", err)
    }
  }

  return (
    <Screen>
      <View style={styles.container}>
        <Header title="Sign In" noIcon />
        <AppTextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <AppButton title="Login" onPress={signIn} />
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.forgotPasswordButtonText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordButtonText: {
    color: "tomato",
    fontSize: 18,
    fontWeight: "600",
  },
})

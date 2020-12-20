import React, { useState } from "react"
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native"

import { Auth } from "aws-amplify"

import Screen from "../../components/Screen"
import AppTextInput from "../../components/AppTextInput"
import AppButton from "../../components/AppButton"
import AppText from "../../components/AppText"
import colors from "../../config/colors"

export default function AppSignIn({ navigation, updateAuthState }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function signIn() {
    try {
      const data = await Auth.signIn(username, password)
      console.log("success")
      console.log(data.attributes)
      // const user = query API for user profile with ID === data.attributes.sub
      // store.setUser(user)
      updateAuthState("loggedIn")
    } catch (err) {
      console.log("Error signing in...", err)
    }
  }

  return (
    <Screen>
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
        source={require("../../assets/pic1.jpeg")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.mainView}>
              <View style={styles.header}>
                <AppText
                  style={{
                    fontFamily: "Futura",
                  }}
                  fontWeight="bold"
                  fontSize={70}
                >
                  Song
                  {/* Play with fonts here if you want */}
                  {/* http://iosfonts.com/ */}
                  <AppText style={{ fontFamily: "Baskerville-BoldItalic" }}>
                    Pact
                  </AppText>
                </AppText>
              </View>
              <View style={styles.signInView}>
                <AppTextInput
                  style={styles.input}
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                  // icon="email"
                  placeholder="Email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
                <AppTextInput
                  style={styles.input}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  // icon="lock"
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                />
                <AppButton
                  title="Login"
                  onPress={signIn}
                  style={styles.loginButton}
                />
              </View>
              <View style={styles.footerButtonContainer}>
                <AppText>Don't have an account?</AppText>
                <AppButton
                  title="Sign Up"
                  onPress={() => navigation.navigate("SignUp")}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
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
    justifyContent: "space-around",
  },
  header: {
    marginTop: 50,
    justifyContent: "center",
  },
  signInView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    backgroundColor: "rgba(250, 250, 250, 0.8)",
    fontSize: 18,
    paddingLeft: 20,
    height: 45,
    borderRadius: 25,
  },
  loginButton: {
    marginTop: 10,
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.red,
    width: "80%",
  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPasswordButtonText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "600",
  },
})

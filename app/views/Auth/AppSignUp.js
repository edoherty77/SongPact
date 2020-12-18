import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Auth } from "aws-amplify"
import { SafeAreaView } from "react-native-safe-area-context"
import AppTextInput from "../../components/AppTextInput"
import AppButton from "../../components/AppButton"
import Screen from "../../components/Screen"
import { KeyboardAvoidingView } from "react-native"
import Header from "../../components/Header"
import { TouchableWithoutFeedback } from "react-native"
import { Keyboard } from "react-native"
import { Platform } from "react-native"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  artistName: Yup.string().required().label("Artist name"),
  // companyName: Yup.string().label('Artist name'),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
  password2: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
})

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  //   const [email, setEmail] = useState("")

  async function signUp() {
    try {
      await Auth.signUp({ username, password, attributes: { email: username } })
      console.log("✅ Sign-up Confirmed")
      navigation.navigate("ConfirmSignUp")
    } catch (error) {
      console.log("❌ Error signing up...", error)
    }
  }

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header title="Register" noIcon />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.registerView}>
            <AppTextInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
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
              // textContentType="password" // TODO uncomment!
            />
            {/* <AppTextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          icon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        /> */}
            <AppButton title="Sign Up" onPress={signUp} />
            <View style={styles.footerButtonContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.forgotPasswordButtonText}>
                  Already have an account? Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Screen>
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

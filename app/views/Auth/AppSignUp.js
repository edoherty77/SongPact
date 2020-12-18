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
import colors from "../../config/colors"
import AppText from "../../components/AppText"
import { AppForm, AppFormField, SubmitButton } from "../../components/forms"

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
        <Header title="Sign Up" noIcon />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.mainView}>
            <View style={styles.registerView}>
              <AppForm
                initialValues={{
                  firstName: "",
                  lastName: "",
                  artistName: "",
                  companyName: "",
                  email: "",
                  password: "",
                  password2: "",
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
              >
                <AppFormField
                  style={styles.input}
                  name="firstName"
                  placeholder="First Name*"
                  autoCorrect={false}
                  textContentType="givenName"
                  paddingRight={"8%"}
                />
                <AppFormField
                  style={styles.input}
                  name="lastName"
                  placeholder="Last Name*"
                  autoCorrect={false}
                  textContentType="familyName"
                  paddingRight={"17%"}
                />
                <AppFormField
                  style={styles.input}
                  name="artistName"
                  placeholder="Artist Name*"
                  autoCorrect={false}
                  // paddingRight={"5%"}
                />
                <AppFormField
                  style={styles.input}
                  name="companyName"
                  placeholder="Company Name"
                  autoCorrect={false}
                  // paddingRight={"5%"}
                />
                <AppFormField
                  style={styles.input}
                  name="email"
                  placeholder="Email*"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  // paddingRight={"5%"}
                />
                <AppFormField
                  style={styles.input}
                  name="password"
                  placeholder="Password*"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  secureTextEntry
                />
                <AppFormField
                  style={styles.input}
                  name="password2"
                  placeholder="Confirm Password*"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  secureTextEntry
                />
                <SubmitButton
                  style={styles.createButton}
                  title="Create Profile"
                  color={colors.confirm}
                  dismissKey={Keyboard.dismiss}
                />
              </AppForm>
              {/* <AppTextInput
                style={styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)}
                // icon="email"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
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
                // textContentType="password" // TODO uncomment!
              />
              <AppButton
                title="Sign Up"
                onPress={signUp}
                style={styles.signUpButton}
              /> */}
            </View>
            <View style={styles.loginView}>
              <AppText>Already have an account?</AppText>
              <AppButton
                title="Sign In"
                onPress={() => navigation.navigate("SignIn")}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lttan,
  },
  mainView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  registerView: {
    flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
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
  signUpButton: {
    marginTop: 20,
    borderRadius: 50,
    height: 50,
    backgroundColor: colors.red,
    width: "80%",
  },
  loginView: {
    display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
    // width: "90%",
    marginTop: 30,
    flex: 1,
  },
  // confirmModal: {
  //   backgroundColor: colors.lttan,
  //   marginHorizontal: 50,
  //   marginTop: 200,
  //   marginBottom: 250,
  //   padding: 0,
  //   borderRadius: 30,
  // },
  // modalView: {
  //   height: 350,
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: 20,
  // },
})

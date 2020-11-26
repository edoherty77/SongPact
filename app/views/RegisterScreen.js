import React, { useState } from "react"
import { StyleSheet, View, KeyboardAvoidingView } from "react-native"
import * as Yup from "yup"

import Screen from "../components/Screen"
import Header from "../components/Header"
import { AppForm, AppFormField, SubmitButton } from "../components/forms"

import colors from "../config/colors"

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  artistName: Yup.string().required().label("Artist name"),
  companyName: Yup.string().label("Artist name"),
  email: Yup.string().required().email().label("Email"),
  password1: Yup.string().required().label("Password1"),
  password2: Yup.string().oneOf(
    [Yup.ref("password1"), null],
    "Passwords must match"
  ),
})

function SignUpScreen() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    artistName: "",
    companyName: "",
    email: "",
    password1: "",
    password2: "",
  })

  console.log(user.firstName)

  const register = (values) => {
    console.log(values)
  }

  const SignUp = () => {}

  return (
    <Screen>
      <Header title="Sign Up" noIcon />
      <KeyboardAvoidingView behavior="padding" style={styles.body}>
        <View style={styles.inputs}>
          <AppForm
            initialValues={{
              firstName: "",
              lastName: "",
              artistName: "",
              companyName: "",
              email: "",
              password1: "",
              password2: "",
            }}
            onSubmit={(values) => register(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              name="firstName"
              placeholder="First Name*"
              autoCorrect={false}
              textContentType="givenName"
              paddingRight={"8%"}
            />
            <AppFormField
              name="lastName"
              placeholder="Last Name*"
              autoCorrect={false}
              textContentType="familyName"
              paddingRight={"17%"}
            />
            <AppFormField
              name="artistName"
              placeholder="Artist Name*"
              autoCorrect={false}
              // paddingRight={"5%"}
            />
            <AppFormField
              name="companyName"
              placeholder="Company Name"
              autoCorrect={false}
              // paddingRight={"5%"}
            />
            <AppFormField
              name="email"
              placeholder="Email*"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              keyboardType="email-address"
              // paddingRight={"5%"}
            />
            <AppFormField
              name="password1"
              placeholder="Password*"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
            />
            <AppFormField
              name="password2"
              placeholder="Confirm password*"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password"
              secureTextEntry
            />
            <SubmitButton
              style={styles.createButton}
              title="Create Profile"
              color={colors.confirm}
            />
          </AppForm>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  inputs: {
    flex: 0.7,
    width: "80%",
    alignSelf: "center",
    marginVertical: "20%",
    justifyContent: "space-between",
  },
  createButton: {
    width: "100%",
    marginTop: 20,
    backgroundColor: colors.confirm,
  },
})

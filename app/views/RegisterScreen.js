import React, { useState } from "react"
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import * as Yup from "yup"

import Screen from "../components/Screen"
import Header from "../components/Header"
import { AppForm, AppFormField, SubmitButton } from "../components/forms"

import { SIGNUP_USER } from "../src/graphql/Queries"
import { useMutation } from "@apollo/client"

import User from "../stores/UserStore"

import colors from "../config/colors"

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

function RegisterScreen() {
  const [mutate] = useMutation(SIGNUP_USER)

  // const register = (values) => {
  // const newUser = new User(values)
  // console.log(values)
  // UserStore.addUser(newUser)
  // }
  async function submit(values) {
    try {
      const { data } = await mutate({
        variables: values,
      })
      if (data) {
        console.log(data.signupUser)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const SignUp = () => {}

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header title="Register" noIcon />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.register}>
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
              onSubmit={(values) => submit(values)}
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
                dismissKey={Keyboard.dismiss}
              />
            </AppForm>
          </View>
        </TouchableWithoutFeedback>
        <View style={{ flex: 1 }} />
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  register: {
    width: "100%",
    // marginVertical: 30,
    alignItems: "center",
  },
  input: {
    width: "70%",
  },
  createButton: {
    width: "80%",
    marginTop: 20,
    backgroundColor: colors.confirm,
  },
})

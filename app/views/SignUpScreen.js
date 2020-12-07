import React, { useState } from "react"
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  ImageBackground,
} from "react-native"
import * as Yup from "yup"

import Screen from "../components/Screen"
import Header from "../components/Header"
import { AppForm, AppFormField, SubmitButton } from "../components/forms"

import { SIGNUP_USER } from "../src/graphql/Queries"
import { useMutation } from "@apollo/client"

import colors from "../config/colors"
import AppText from "../components/AppText"
import AppButton from "../components/AppButton"
import ButtonText from "../components/ButtonText"

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

function SignUpScreen({ navigation }) {
  const [mutate] = useMutation(SIGNUP_USER)

  // const register = (values) => {
  // const newUser = new User(values)
  // console.log(values)
  // UserStore.addUser(newUser)
  // }
  async function submit(values) {
    const { data } = await mutate({
      variables: values,
    })
    if (data) {
      console.log(data.signupUser)
    }
  }

  const SignUp = () => {}

  return (
    <Screen>
      {/* <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}
        source={require('../assets/pic1.jpeg')}
      > */}
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header title="Register" noIcon />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              onSubmit={(values) => submit(values)}
              validationSchema={validationSchema}
            >
              <View style={styles.fieldView}>
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
              </View>
              <View style={styles.submitView}>
                <SubmitButton
                  style={styles.createButton}
                  title="Create Profile"
                  color={colors.confirm}
                  dismissKey={Keyboard.dismiss}
                />
              </View>
              <View style={styles.loginView}>
                <Text style={{ fontSize: 20, fontFamily: "Futura" }}>
                  Already have an accout with us?{" "}
                </Text>
                <ButtonText
                  title="Login"
                  color={colors.red}
                  fontSize={20}
                  onPress={() => navigation.navigate("SignIn")}
                />
              </View>
            </AppForm>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      {/* </ImageBackground> */}
    </Screen>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.lttan,
  },
  registerView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    flex: 1,
  },
  fieldView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 5,
  },
  input: {
    width: "95%",
    backgroundColor: colors.gray,
    fontSize: 18,
    paddingLeft: 20,
    height: 45,
    borderRadius: 25,
  },
  submitView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    width: "95%",
    flex: 1,
  },
  createButton: {
    marginTop: 20,
    borderRadius: 50,
    height: 50,
    backgroundColor: colors.red,
  },
  loginView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 10,
    flex: 1,
  },
})

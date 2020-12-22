import React, { useState } from "react"
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native"

import * as Yup from "yup"

import AppButton from "../../components/AppButton"
import { AppForm, AppFormField, SubmitButton } from "../../components/forms"
import AppText from "../../components/AppText"
import Header from "../../components/Header"
import Screen from "../../components/Screen"
import colors from "../../config/colors"

import { createUser } from "../../src/graphql/Queries"
import Amplify, { API, Auth, graphqlOperation } from "aws-amplify"
import store from "../../stores/UserStore" // TODO remove

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  artistName: Yup.string().required().label("Artist name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
  password2: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
})

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  artistName: "",
  companyName: "",
  email: "",
}

export default function SignUp({ navigation }) {
  const [formState, setFormState] = useState(initialState)
  const [user, setUser] = useState("")

  async function signUp(values) {
    try {
      const data = await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          email: values.email,
        },
      })
      console.log("✅ Sign-up Confirmed")
      console.log(data) // TODO remove
      console.log("sub ////", data.userSub) // TODO remove
      store.setUser(values) // TODO remove

      // createUser(values) in API where id == data.userSub
      const userObj = {
        id: data.userSub,
        firstName: values.firstName,
        lastName: values.lastName,
        artistName: values.artistName,
        companyName: values.companyName,
        email: values.email,
        contacts: [],
        pacts: [],
      }
      await API.graphql(graphqlOperation(createUser, userObj))
      console.log("user successfully created")
      // addUser(data.userSub, values)
      // navigation.navigate("ConfirmSignUp")
    } catch (error) {
      console.log("❌ Error signing up...", error)
    }
  }

  const addUser = async (id, values) => {
    try {
      const userObj = {
        id: id.toString(),
        firstName: values.firstName,
        lastName: values.lastName,
        artistName: values.artistName,
        companyName: values.companyName,
        email: values.email,
        contacts: [],
        pacts: [],
      }
      await API.graphql(graphqlOperation(createUser, userObj))
      console.log("user successfully created")
    } catch (error) {
      console.log("Error adding user: ", error)
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
                onSubmit={(values) => signUp(values)}
                validationSchema={validationSchema}
              >
                <AppFormField
                  style={styles.input}
                  name="firstName"
                  placeholder="First Name*"
                  autoCorrect={false}
                  textContentType="givenName"
                />
                <AppFormField
                  style={styles.input}
                  name="lastName"
                  placeholder="Last Name*"
                  autoCorrect={false}
                  textContentType="familyName"
                />
                <AppFormField
                  style={styles.input}
                  name="artistName"
                  placeholder="Artist Name*"
                  autoCorrect={false}
                />
                <AppFormField
                  style={styles.input}
                  name="companyName"
                  placeholder="Company Name"
                  autoCorrect={false}
                />
                <AppFormField
                  style={styles.input}
                  name="email"
                  placeholder="Email*"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                />
                <AppFormField
                  style={styles.input}
                  name="password"
                  placeholder="Password*"
                  autoCapitalize="none"
                  autoCorrect={false}
                  // textContentType="password" // TODO uncomment!!!
                  // secureTextEntry // TODO uncomment!!!
                />
                <AppFormField
                  style={styles.input}
                  name="password2"
                  placeholder="Confirm Password*"
                  autoCapitalize="none"
                  autoCorrect={false}
                  // textContentType="password" // TODO uncomment!!!
                  // secureTextEntry // TODO uncomment!!!
                />
                <SubmitButton
                  style={styles.signUpButton}
                  title="Sign Up"
                  color={colors.confirm}
                  dismissKey={Keyboard.dismiss}
                />
              </AppForm>
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
    height: 35,
    borderRadius: 15,
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
    alignItems: "center",
    marginVertical: 50,
  },
})

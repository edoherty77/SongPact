import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native"
import KeyboardAwareScrollView from "react-native-keyboard-aware-scroll-view"
import AppButton from "../components/AppButton"
import AppTextInput from "../components/AppTextInput"
import { Form, FormField, SubmitButton } from "../components/forms"
import Header from "../components/Header"
import Screen from "../components/Screen"
import colors from "../config/colors"

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

  const onTextInput = (key, text) => {
    user[key] = text
  }

  const handleSubmit = () => {
    console.log("submit")
  }

  const SignUp = () => {}

  return (
    <Screen>
      <Header title="Sign Up" noIcon />
      <KeyboardAvoidingView behavior="padding" style={styles.body}>
        <View style={styles.inputs}>
          <Form>
            <View style={styles.firstLast}>
              <FormField
                placeholder="First Name*"
                paddingRight={"5%"}
                onChangeText={(text) => onTextInput(firstName, text)}
              />
              <FormField placeholder="Last Name*" paddingRight={"23%"} />
            </View>
            <FormField placeholder="Artist Name*" />
            <FormField placeholder="Company Name" />
            <FormField placeholder="Email*" />
            <FormField placeholder="Password*" />
            <FormField placeholder="Repeat Password*" />
          </Form>
        </View>
        {/* <SubmitButton
          style={styles.createButton}
          title="Create Profile"
          color={colors.confirm}
          handleSubmit={handleSubmit}
        /> */}
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
    // backgroundColor: colors.secondary,
  },
  firstLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "100%",
  },
  createButton: {
    width: "100%",
    position: "absolute",
    bottom: "20%",
  },
})

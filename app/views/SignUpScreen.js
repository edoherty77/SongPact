import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import AppButton from "../components/AppButton"
import AppTextInput from "../components/AppTextInput"
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

  return (
    <Screen>
      <Header title="Sign Up" noIcon />
      <View style={styles.inputs}>
        <View style={styles.firstLast}>
          <AppTextInput placeholder="First Name*" paddingRight={"5%"} />
          <AppTextInput placeholder="Last Name*" paddingRight={"23%"} />
        </View>
        <AppTextInput placeholder="Artist Name*" />
        <AppTextInput placeholder="Company Name" />
        <AppTextInput placeholder="Email*" />
        <AppTextInput placeholder="Password*" />
        <AppTextInput placeholder="Repeat Password*" />
      </View>
      <AppButton
        style={styles.createButton}
        title="Create Profile"
        color={colors.confirm}
        onPress={() => {
          console.log("Create Profile")
        }}
      />
    </Screen>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputs: {
    flex: 0.5,
    width: "80%",
    alignSelf: "center",
    marginVertical: "30%",
  },
  firstLast: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "100%",
  },
  createButton: {
    marginTop: "24%",
    width: "100%",
    alignSelf: "center",
  },
})

import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AppButton from "../components/AppButton"
import Header from "../components/Header"
import colors from "../config/colors"

const SignIn = () => {
  return (
    <View style={styles.screen}>
      <Header title="SongPact" />
      <View style={styles.message}>
        <Text style={styles.welcome}>Welcome Message</Text>
        <Text>
          Laborum nostrud proident sit elit qui occaecat proident sunt ut. Lorem
          proident velit culpa non nostrud enim non. Est adipisicing laboris
          mollit fugiat esse et. Nostrud amet qui eiusmod sit commodo voluptate
          quis cillum ipsum qui Lorem sint laborum. Enim quis excepteur fugiat
          quis laborum sunt consequat aliqua aute cillum laborum deserunt cillum
          reprehenderit. Eu dolore nulla nostrud velit in aliqua cupidatat ea.
          Ad do culpa culpa excepteur qui magna sunt veniam consectetur qui qui
          qui.
        </Text>
      </View>
      <View style={styles.signIn}>
        <Text>USERNAME</Text>
        <Text>PASSWORD</Text>
        <AppButton
          title="Login"
          color={colors.confirm}
          onPress={() => console.log("login pressed")}
        />
        <View style={styles.signUp}>
          <Text>Don't have an account?</Text>
          <AppButton
            title="Sign Up"
            color={colors.secondary}
            onPress={() => console.log("signUp pressed")}
          />
        </View>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  signIn: {},
  loginButton: {},
  signUp: {},
})

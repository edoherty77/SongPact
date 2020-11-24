import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AppButton from "../components/AppButton"
import AppText from "../components/AppText"
import Header from "../components/Header"
import colors from "../config/colors"

const SignIn = () => {
  return (
    <View style={styles.screen}>
      <Header title="SongPact" noIcon />
      <View style={styles.body}>
        <View style={styles.welcomeMessage}>
          <AppText style={styles.welcome}>Welcome Message</AppText>
          <AppText style={styles.message}>
            Laborum nostrud proident sit elit qui occaecat proident sunt ut.
            Lorem proident velit culpa non nostrud enim non. Est adipisicing
            laboris mollit fugiat esse et. Nostrud amet qui eiusmod sit commodo
            voluptate quis cillum ipsum qui Lorem sint laborum. Enim quis
            excepteur fugiat quis laborum sunt consequat aliqua aute cillum
            laborum deserunt cillum reprehenderit. Eu dolore nulla nostrud velit
            in aliqua cupidatat ea. Ad do culpa culpa excepteur qui magna sunt
            veniam consectetur qui qui qui.
          </AppText>
        </View>
        <View style={styles.signIn}>
          <AppText>USERNAME</AppText>
          <AppText>PASSWORD</AppText>
          <View style={styles.loginButton}>
            <AppButton
              title="Login"
              color={colors.confirm}
              onPress={() => console.log("login pressed")}
            />
          </View>
          <View style={styles.signUp}>
            <AppText>Don't have an account?</AppText>
            <AppButton
              title="Sign Up"
              color={colors.secondary}
              onPress={() => console.log("signUp pressed")}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
  welcomeMessage: {
    flex: 1,
    width: "80%",
  },
  welcome: {
    fontSize: 18,
  },
  message: {
    textAlign: "justify",
  },
  signIn: {
    flex: 1,
    width: "100%",
  },
  loginButton: {
    width: "50%",
  },
  signUp: {
    flex: 1,
  },
})

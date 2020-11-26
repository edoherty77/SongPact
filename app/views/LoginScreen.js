import React, { useContext } from "react"
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import * as Yup from "yup"

import Screen from "../components/Screen"
import Header from "../components/Header"
import AppButton from "../components/AppButton"
import AppText from "../components/AppText"
import { AppForm, AppFormField, SubmitButton } from "../components/forms"
import UserContext from "../context/userContext"

import colors from "../config/colors"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext)

  const login = (values) => {
    console.log(values)
    // setUser(true)
  }

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Header title="SongTract" noIcon />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.welcomeBox}>
              <AppText style={styles.welcomeTitle} color={colors.white}>
                Welcome Message
              </AppText>
              <AppText style={styles.welcomeMessage} color={colors.white}>
                Laborum nostrud proident sit elit qui occaecat proident sunt ut.
                Lorem proident velit culpa non nostrud enim non. Est adipisicing
                laboris mollit fugiat esse et. Nostrud amet qui eiusmod sit
                commodo voluptate quis cillum ipsum qui Lorem sint laborum. Enim
                quis excepteur fugiat quis laborum sunt consequat aliqua aute
                cillum laborum deserunt cillum reprehenderit. Eu dolore nulla
                nostrud velit in aliqua cupidatat ea. Ad do culpa culpa
                excepteur qui magna sunt veniam consectetur qui qui qui.
              </AppText>
              <AppText style={styles.welcomeMessage} color={colors.white}>
                Login or Register to continue.
              </AppText>
            </View>
            <View style={styles.signIn}>
              <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => login(values)}
                validationSchema={validationSchema}
              >
                <AppFormField
                  name="email"
                  style={styles.input}
                  placeholder="Email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                />
                <AppFormField
                  name="password"
                  style={styles.input}
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  textContentType="password"
                  secureTextEntry
                />
                <SubmitButton
                  style={styles.loginButton}
                  title="Login"
                  color={colors.confirm}
                />
              </AppForm>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.register}>
          <AppText>Don't have an account?</AppText>
          <AppButton
            style={styles.registerBtn}
            title="Register"
            color={colors.white}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
        <View style={{ flex: 1 }} />
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  welcomeBox: {
    width: "80%",
    alignSelf: "center",
  },
  welcomeTitle: {
    fontSize: 18,
    textAlign: "center",
  },
  welcomeMessage: {
    marginTop: 20,
    textAlign: "justify",
  },
  signIn: {
    width: "100%",
    marginVertical: 40,
    alignItems: "center",
  },
  input: {
    width: "70%",
  },
  loginButton: {
    width: "80%",
    marginTop: 10,
    backgroundColor: colors.confirm,
  },
  register: {
    flexDirection: "row",
    alignSelf: "center",
  },
  registerBtn: {
    width: "30%",
    marginLeft: "10%",
  },
})

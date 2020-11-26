import React, { useContext } from "react"
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native"
import { Formik } from "formik"
import * as Yup from "yup"

import Screen from "../components/Screen"
import AppButton from "../components/AppButton"
import AppText from "../components/AppText"
import Header from "../components/Header"
import UserContext from "../context/userContext"
import AppTextInput from "../components/AppTextInput"

import colors from "../config/colors"
import ErrorMessage from "../components/forms/ErrorMessage"

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
      <Header title="SongPact" noIcon />
      <KeyboardAvoidingView behavior="padding" style={styles.body}>
        <View style={styles.welcomeMessage}>
          <AppText style={styles.welcome} color={colors.white}>
            Welcome Message
          </AppText>
          <AppText style={styles.message} color={colors.white}>
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
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => login(values)}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <AppTextInput
                  style={styles.inputs}
                  onBlur={() => setFieldTouched("email")}
                  placeholder="Email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  onChangeText={handleChange("email")}
                  textContentType="emailAddress"
                  keyboardType="email-address"
                />
                <ErrorMessage error={errors.email} visible={touched.email} />
                <AppTextInput
                  style={styles.inputs}
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  onChangeText={handleChange("password")}
                  textContentType="password"
                  secureTextEntry
                />
                <ErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />
                <AppButton
                  style={styles.loginButton}
                  title="Login"
                  color={colors.confirm}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>

        <View style={styles.signUp}>
          <AppText>Don't have an account?</AppText>
          <AppButton
            style={styles.signUpButton}
            title="Sign Up"
            color={colors.white}
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    alignItems: "center",
  },
  welcomeMessage: {
    marginTop: "10%",
    flex: 1,
    width: "80%",
  },
  welcome: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: "5%",
  },
  message: {
    textAlign: "justify",
  },
  signIn: {
    // flex: 0.2,
    width: "100%",
    // marginTop: 20,
    marginBottom: 40,
    // marginVertical: "30%",
    alignItems: "center",
  },
  inputs: {
    width: "80%",
    alignSelf: "center",
    // marginBottom: 20,
    // marginVertical: 5,
  },
  loginButton: {
    width: "100%",
    marginTop: 10,
  },
  signUp: {
    flex: 0.2,
    flexDirection: "row",
    marginBottom: "10%",
  },
  signUpButton: {
    width: "20%",
    marginLeft: "10%",
  },
})

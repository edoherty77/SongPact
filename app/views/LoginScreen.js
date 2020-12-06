import React, { useContext } from "react"
import { PixelRatio } from "react-native"
import { observer } from "mobx-react"
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
import ButtonIcon from "../components/ButtonIcon"
import AppText from "../components/AppText"
import { AppForm, AppFormField, SubmitButton } from "../components/forms"
import UserContext from "../context/userContext"

import store from "../stores/TestStore"

import colors from "../config/colors"
import { useMutation } from "@apollo/client"
import { GET_ALL_USERS } from "../src/graphql/Queries"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = observer(({ navigation }) => {
  const [mutate] = useMutation(GET_ALL_USERS)
  const { user, setUser } = useContext(UserContext)

  const login = async (values) => {
    console.log(values)
    try {
      const 
    } catch (error) {
      console.log(error);
    }
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
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingVertical: 4 * PixelRatio.get(),
          }}
        >
          <ButtonIcon name="plus" onPress={() => store.increase()} />
          <AppButton
            style={{ width: "20%" }}
            title={store.value}
            color={colors.light}
            onPress={() => navigation.navigate("Mobx")}
          />
          <ButtonIcon name="minus" onPress={() => store.decrease()} />
        </View>
        <View style={{ flex: 1 }} />
      </KeyboardAvoidingView>
    </Screen>
  )
})

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
    fontSize: 7 * PixelRatio.get(),
    textAlign: "center",
  },
  welcomeMessage: {
    marginTop: 5 * PixelRatio.get(),
    fontSize: 5 * PixelRatio.get(),
    textAlign: "justify",
  },
  signIn: {
    width: "100%",
    marginVertical: 10 * PixelRatio.get(),
    alignItems: "center",
  },
  input: {
    width: "70%",
  },
  loginButton: {
    width: "80%",
    marginTop: 3 * PixelRatio.get(),
    backgroundColor: colors.confirm,
  },
  register: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  registerBtn: {
    width: "30%",
    marginLeft: "5%",
  },
})

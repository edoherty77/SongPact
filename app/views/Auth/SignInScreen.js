import React, { useContext } from "react"
import { observer } from "mobx-react"
import NativeModal from "react-native-modal"
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native"
import * as Yup from "yup"

import Screen from "./../../components/Screen"
import AppText from "./../../components/AppText"
import { AppForm, AppFormField, SubmitButton } from "../../components/forms"

import { Auth } from "aws-amplify"

import store from "../../stores/TestStore"

import colors from "../../config/colors"

import { GET_CURRENT_USER, SIGNIN_USER } from "../../src/graphql/Queries"
import { useMutation, useQuery } from "@apollo/client"
import ButtonText from "../../components/ButtonText"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

const SignInScreen = ({ navigation }) => {
  // const { user, setUser } = useContext(UserContext)
  // const [mutate] = useMutation(SIGNIN_USER)

  // const login = async (values) => {
  //   try {
  //     const { loading, error, data } = await useQuery(GET_CURRENT_USER, {
  //       variables: values.email,
  //     })
  //     if (loading) return null
  //     if (error) return `Error! ${error}`
  //     if (data) console.log("login data: ", data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // async function submit(values) {
  //   const { data } = await mutate({
  //     variables: values,
  //   })
  //   if (data) {
  //     console.log(data.signinUser)
  //   }
  // }

  async function login(values) {
    try {
      const user = await Auth.signIn({
        username: values.email,
        password: values.password,
      })
      console.log(user.attributes)
      store.setUser({ ...user.attributes })
    } catch (error) {
      console.log("error signing in", error)
    }
  }

  return (
    <Screen>
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
        source={require("../../assets/pic1.jpeg")}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
          {/* <Header title="" noIcon /> */}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.mainView}>
              {/* <View style={styles.welcomeBox}>
                <AppText style={styles.welcomeTitle} color={colors.white}>
                Welcome Message
              </AppText>
                <AppText
                  style={styles.welcomeMessage}
                  fontSize={25}
                  color="white"
                >
                  SongPact is a contract generating and networking app built for
                  creators to streamline rights acquisition and clearance
                  throughout the creative collaboration process. SongPact gives
                  creators the tools they need to secure the rights necessary to
                  create, market and sell their art.
                </AppText>
                <AppText style={styles.welcomeMessage} color={colors.white}>
                Login or Register to continue.
              </AppText>
              </View> */}
              <View style={styles.header}>
                <AppText
                  style={{
                    fontFamily: "Futura",
                  }}
                  fontWeight="bold"
                  fontSize={70}
                >
                  Song
                  {/* Play with fonts here if you want */}
                  {/* http://iosfonts.com/ */}
                  <AppText style={{ fontFamily: "Baskerville-BoldItalic" }}>
                    Pact
                  </AppText>
                </AppText>
              </View>
              <View style={styles.signinView}>
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
                    placeholderTextColor={colors.black}
                    // icon="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                  />
                  <AppFormField
                    name="password"
                    style={styles.input}
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    // icon="lock"
                    placeholderTextColor={colors.black}
                    textContentType="password"
                    secureTextEntry
                  />
                  <SubmitButton style={styles.loginButton} title="Login" />
                  <View style={styles.registerView}>
                    <AppText fontWeight="bold" fontSize={20}>
                      Don't Have An Account?
                    </AppText>
                    <ButtonText
                      fontSize={25}
                      color={colors.red}
                      style={styles.createBtn}
                      title="Sign Up"
                      onPress={() => navigation.navigate("SignUp")}
                    />
                  </View>
                </AppForm>
              </View>

              <ButtonText
                fontSize={20}
                style={styles.helpBtn}
                title="Need Help?"
                onPress={() => console.log("help me")}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Screen>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mainView: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    marginTop: 50,
    justifyContent: "center",
  },
  // welcomeBox: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'rgba(250, 250, 250, 0.5)',
  //   flex: 5,
  //   margin: 60,
  // },
  // welcomeTitle: {
  //   fontSize: 18,
  //   textAlign: 'center',
  // },
  // welcomeMessage: {
  //   textAlign: 'justify',
  // },
  signinView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    backgroundColor: "rgba(250, 250, 250, 0.8)",
    fontSize: 18,
    paddingLeft: 20,
    height: 45,
    borderRadius: 25,
  },
  loginButton: {
    marginTop: 10,
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.red,
    width: "80%",
  },
  registerView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    width: "100%",
  },
  createBtn: {
    paddingTop: 10,
  },
  helpBtn: {
    position: "absolute",
    bottom: -30,
    right: 70,
  },
})

{
  /* <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 20,
          }}
        >
          <ButtonIcon name="plus" onPress={() => store.increase()} />
          <AppButton
            style={{ width: '20%' }}
            title={store.value}
            color={colors.light}
            onPress={() => navigation.navigate('Mobx')}
          />
          <ButtonIcon name="minus" onPress={() => store.decrease()} />
        </View>
        <View style={{ flex: 1 }} /> */
}

import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  ImageBackground,
} from 'react-native'
import * as Yup from 'yup'
import NativeModal from 'react-native-modal'

import Screen from '../components/Screen'
import Header from '../components/Header'

import { AppForm, AppFormField, SubmitButton } from '../components/forms'

import { Auth } from 'aws-amplify'

import { SIGNUP_USER } from '../src/graphql/Queries'
import { useMutation } from '@apollo/client'

import colors from '../config/colors'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import ButtonText from '../components/ButtonText'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label('First name'),
  lastName: Yup.string().required().label('Last name'),
  artistName: Yup.string().required().label('Artist name'),
  // companyName: Yup.string().label('Artist name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
  password2: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
})

function SignUpScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  async function submit(values) {
    try {
      const { user } = await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          email: values.email,
        },
      })
      if (user) {
        // const { data } = await mutate({
        //   variables: values,
        // })
        setModalVisible(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function verify(values) {
    const authCode = values.code
    const username = values.email
    // console.log(authCode)
    Auth.confirmSignUp(username, authCode)
      .then((data) => console.log(data))
      .then(() => setModalVisible(false))
      .then(() => navigation.navigate('SignIn'))
      .catch((err) => console.log(err))
  }

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Header title="Register" noIcon />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.registerView}>
            <AppForm
              initialValues={{
                firstName: '',
                lastName: '',
                artistName: '',
                companyName: '',
                email: '',
                password: '',
                password2: '',
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
                  paddingRight={'8%'}
                />
                <AppFormField
                  style={styles.input}
                  name="lastName"
                  placeholder="Last Name*"
                  autoCorrect={false}
                  textContentType="familyName"
                  paddingRight={'17%'}
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
                <Text style={{ fontSize: 20, fontFamily: 'Futura' }}>
                  Already have an accout with us?{' '}
                </Text>
                <ButtonText
                  title="Login"
                  color={colors.red}
                  fontSize={20}
                  onPress={() => navigation.navigate('SignIn')}
                />
              </View>
            </AppForm>
            <NativeModal
              hasBackdrop={true}
              isVisible={modalVisible}
              animationType="slide"
              // onBackdropPress={() => setModalVisible(false)}
              // backdropColor="blue"
              backdropOpacity={0.6}
              // onModalHide={() => {
              //   getLocation(), refreshMap(100)
              // }}
              style={styles.confirmModal}
            >
              <View style={styles.modalView}>
                <AppText fontWeight="bold" color={colors.black} fontSize={25}>
                  Verify Your Account
                </AppText>
                <AppForm
                  initialValues={{
                    email: '',
                    code: '',
                  }}
                  onSubmit={(values) => verify(values)}
                  // validationSchema={validationSchema}
                >
                  <View style={styles.fieldView}>
                    <AppFormField
                      style={[styles.input, { width: '100%' }]}
                      name="email"
                      autoCapitalize="none"
                      placeholder="Email"
                      autoCorrect={false}
                      textContentType="emailAddress"
                      keyboardType="email-address"
                      paddingRight={'8%'}
                    />
                    <AppFormField
                      style={[styles.input, { width: '100%' }]}
                      name="code"
                      placeholder="Verification Code"
                      paddingRight={'8%'}
                    />
                    <SubmitButton
                      style={[{ width: '100%' }, styles.createButton]}
                      title="Submit"
                      color={colors.confirm}
                      dismissKey={Keyboard.dismiss}
                    />
                  </View>
                </AppForm>
              </View>
            </NativeModal>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Screen>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.lttan,
  },
  registerView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    flex: 1,
  },
  fieldView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
  },
  input: {
    width: '95%',
    backgroundColor: colors.gray,
    fontSize: 18,
    paddingLeft: 20,
    height: 45,
    borderRadius: 25,
  },
  submitView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '95%',
    flex: 1,
  },
  createButton: {
    marginTop: 20,
    borderRadius: 50,
    height: 50,
    backgroundColor: colors.red,
  },
  loginView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 10,
    flex: 1,
  },
  confirmModal: {
    backgroundColor: colors.lttan,
    marginHorizontal: 50,
    marginTop: 200,
    marginBottom: 250,
    padding: 0,
    borderRadius: 30,
  },
  modalView: {
    height: 350,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
})

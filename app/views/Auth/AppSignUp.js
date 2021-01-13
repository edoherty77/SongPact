import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native'

import * as Yup from 'yup'

import AppButton from '../../components/AppButton'
import { AppForm, AppFormField, SubmitButton } from '../../components/forms'
import AppText from '../../components/AppText'
import Header from '../../components/Header'
import Screen from '../../components/Screen'
import colors from '../../config/colors'

import { createUser } from '../../../graphql/mutations'
import { listUsers } from '../../../graphql/queries'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import store from '../../stores/UserStore' // TODO remove
import { ScrollView } from 'react-native'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label('First name'),
  lastName: Yup.string().required().label('Last name'),
  artistName: Yup.string().required().label('Artist name'),
  address: Yup.string().required().label('Address 1'),
  city: Yup.string().required().label('City'),
  state: Yup.string().required().label('State'),
  zipCode: Yup.number().required().label('Zip Code'),
  country: Yup.string().required().label('Country'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
  password2: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
})

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  artistName: '',
  companyName: '',
  email: '',
}

export default function signUp({ navigation }) {
  const [formState, setFormState] = useState(initialState)
  const [user, setUser] = useState('')

  async function signUp(values) {
    try {
      // sign up with Amplify
      const data = await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          email: values.email,
        },
      })
      console.log('✅ Sign-up Confirmed')

      addUserToAPI(data.userSub, values)

      // go to confirmation screen
      navigation.navigate('ConfirmSignUp')
    } catch (error) {
      console.log('❌ Error signing up...', error)
    }
  }

  const addUserToAPI = async (id, values) => {
    try {
      // create userObj
      const userObj = {
        id: id,
        firstName: values.firstName,
        lastName: values.lastName,
        artistName: values.artistName,
        companyName: values.companyName,
        email: values.email,
      }

      // create user in db with userObj
      await API.graphql(graphqlOperation(createUser, { input: userObj }))
      console.log('user successfully created')

      // call listUsers to confirm new user created
      const allUsers = await API.graphql(graphqlOperation(listUsers))

      console.log(allUsers)
    } catch (error) {
      console.log('Error adding user: ', error)
    }
  }

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Header title="Sign Up" noIcon />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.mainView}>
            <ScrollView
              contentContainerStyle={styles.registerView}
              contentOffset={{ x: 0, y: -100 }}
            >
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
                  name="address"
                  placeholder="Street Address"
                  autoCorrect={false}
                  textContentType="fullStreetAddress"
                />
                <AppFormField
                  style={styles.input}
                  name="city"
                  placeholder="City"
                  autoCorrect={false}
                  // width={"120%"}
                  textContentType="addressCity"
                />
                <AppFormField
                  style={styles.input}
                  name="state"
                  placeholder="State"
                  autoCorrect={false}
                  // width={"90%"}
                  textContentType="addressState"
                />
                <AppFormField
                  style={styles.input}
                  name="zipCode"
                  placeholder="Zip Code"
                  autoCorrect={false}
                  // width={"70%"}
                  textContentType="postalCode"
                  keyboardType="number-pad"
                />
                <AppFormField
                  style={styles.input}
                  name="country"
                  placeholder="Country"
                  autoCorrect={false}
                  textContentType="countryName"
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
            </ScrollView>
            <View style={styles.loginView}>
              <AppText>Already have an account?</AppText>
              <AppButton
                title="Sign In"
                onPress={() => navigation.navigate('SignIn')}
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  registerView: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    // paddingTop: "70%",
  },
  addressCity: {
    flexDirection: 'row',
    width: '44.5%',
    marginLeft: '10%',
    // backgroundColor: "red",
  },
  stateZip: {
    flexDirection: 'row',
    width: '50%',
    // backgroundColor: "red",
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(250, 250, 250, 0.8)',
    fontSize: 18,
    paddingLeft: 20,
    height: 35,
    borderRadius: 15,
  },
  signUpButton: {
    marginTop: 20,
    borderRadius: 50,
    height: 40,
    backgroundColor: colors.red,
    paddingHorizontal: '15%',
    // width: 200,
  },
  loginView: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 50,
  },
})

import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../../config/colors'
import Screen from '../../components/Screen'
import AppText from '../../components/AppText'
import Header from '../../components/Header'
import Collaborator from '../../components/Collaborator'
import ButtonIcon from '../../components/ButtonIcon'
import ConfirmModal from '../../components/ConfirmModal'

import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import config from '../../../aws-exports'
Amplify.configure(config)
import { createPact } from '../../src/graphql/Queries'

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormRadio,
} from '../../components/forms'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  recordTitle: Yup.string().required().label('Record Title'),
  role: Yup.string().required().label('role'),
  // .test(
  //   'is-true',
  //   'Must agree to terms to continue',
  //   (value) => value === true,
  // ),
})

export default function First({ route, navigation }) {
  const [isModalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState(null)
  const { type } = route.params

  async function next(values) {
    const stuff = {
      recordTitle: values.recordTitle,
      role: values.role,
      type: type,
    }
    setData(stuff)
    console.log('Stuff:', stuff)
    console.log('data:', data)
    try {
      await API.graphql(graphqlOperation(createPact, data))
      console.log('pact successfully created.')
    } catch (err) {
      console.log('error creating pact...', err)
    }
  }

  function trash() {
    setModalVisible(true)
  }

  function trashDeny() {
    setModalVisible(false)
  }

  function trashConfirm() {
    setModalVisible(false)
    navigation.navigate('New')
  }

  return (
    <Screen>
      <Header
        icon={'information'}
        title={type}
        iconPress={() => navigation.navigate('AddCollab')}
        name="arrow-right-bold"
      />
      <View style={styles.mainView}>
        <AppForm
          initialValues={{
            recordTitle: '',
            role: false,
          }}
          onSubmit={(values) => next(values)}
          validationSchema={validationSchema}
        >
          <View style={styles.titleView}>
            <View style={styles.sectionText}>
              <AppText fontSize={30}>Record Title</AppText>
            </View>
            <AppFormField
              name="recordTitle"
              style={styles.input}
              placeholder="Record Title"
              autoCorrect={false}
              placeholderTextColor={colors.black}
            />
          </View>
          <View style={styles.roleView}>
            <View style={styles.sectionText}>
              <AppText fontSize={30}>Your Role</AppText>
            </View>
            <AppFormRadio
              name="role"
              value1="Producer"
              value2="Purchaser"
              formikKey="role"
            />
          </View>
          <View style={styles.footer}>
            {/* <View style={styles.nextBtnView}> */}
            <SubmitButton style={styles.nextButton} title="Next" />
            {/* </View> */}
            <View style={styles.iconView}>
              <ButtonIcon
                onPress={trash}
                name="delete"
                backgroundColor="transparent"
                iconColor={colors.red}
              />
            </View>
          </View>
        </AppForm>
        <ConfirmModal
          text="Are you sure you'd like to delete?"
          onBackdropPress={() => setModalVisible(false)}
          isVisible={isModalVisible}
          confirm={trashConfirm}
          deny={trashDeny}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    // backgroundColor: colors.gray,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  titleView: {
    // backgroundColor: 'green',
  },
  sectionText: {
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  roleView: {
    // backgroundColor: 'red',
  },
  collabView: {
    // backgroundColor: 'gray',
    flex: 5,
  },
  collabListView: {
    // backgroundColor: 'white',
    // flex: 1,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },

  footer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
    // alignSelf: 'flex-end',
    // justifyContent: 'space-between',
  },
  iconView: {
    position: 'absolute',
    right: 10,
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(250, 250, 250, 0.8)',
    fontSize: 18,
    paddingLeft: 20,
    height: 45,
    borderRadius: 25,
  },
  nextButton: {
    // marginTop: 10,
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.tan,
    width: '50%',
  },
})

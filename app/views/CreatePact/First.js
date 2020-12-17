import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../../config/colors'
import Screen from '../../components/Screen'
import AppText from '../../components/AppText'
import Header from '../../components/Header'
import Collaborator from '../../components/Collaborator'
import ButtonIcon from '../../components/ButtonIcon'
import ConfirmModal from '../../components/ConfirmModal'

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormRadio,
} from '../../components/forms'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  recordTitle: Yup.string().required().label('recordTitle'),
  radio: Yup.string().required().label('radio'),
  // .test(
  //   'is-true',
  //   'Must agree to terms to continue',
  //   (value) => value === true,
  // ),
})

export default function First({ route, navigation }) {
  const [isModalVisible, setModalVisible] = useState(false)
  const { type } = route.params

  function next(values) {
    console.log(values)
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
      <Header icon={'information'} title={type} />
      <View style={styles.mainView}>
        <AppForm
          initialValues={{
            recordTitle: '',
            radio: false,
          }}
          onSubmit={(values) => next(values)}
          validationSchema={validationSchema}
        >
          <View style={styles.titleView}>
            <AppText fontSize={25}>Record Title</AppText>
            <AppFormField
              name="recordTitle"
              style={styles.input}
              placeholder="Record Title"
              // autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={colors.black}
              // textContentType="emailAddress"
              // keyboardType="email-address"
            />
          </View>
          <View style={styles.roleView}>
            <AppText fontSize={25}>Your Role</AppText>
            <AppFormRadio
              name="radio"
              value1="Producer"
              value2="Purchaser"
              formikKey="radio"
            />
          </View>
          <View style={styles.collabView}>
            <AppText fontSize={25}>Add Collaborators</AppText>
            <ButtonIcon
              name="plus"
              backgroundColor="transparent"
              iconColor="black"
            />
            <AppText>Collaborators: </AppText>
            <View style={styles.collabListView}>
              <Collaborator
                name="Evan Doherty"
                role="Purchaser"
                onPress={() => console.log('fuck')}
              />
              <Collaborator name="Seth Johnson" role="Purchaser" />
            </View>
          </View>
          <View style={styles.footer}>
            <SubmitButton style={styles.nextButton} title="Next" />
            <ButtonIcon
              onPress={trash}
              name="delete"
              backgroundColor="transparent"
              iconColor={colors.red}
            />
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
    backgroundColor: 'purple',
  },
  titleView: {
    backgroundColor: 'green',
  },
  roleView: {
    backgroundColor: 'red',
  },
  collabView: {
    backgroundColor: 'gray',
    flex: 5,
  },
  collabListView: {
    backgroundColor: 'white',
    flex: 1,
    margin: 30,
  },

  footer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'pink',
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
    marginTop: 10,
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.red,
    width: '80%',
  },
})

import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import colors from '../../config/colors'
import Screen from '../../components/Screen'
import AppText from '../../components/AppText'
import Header from '../../components/Header'

import ButtonIcon from '../../components/ButtonIcon'
import ConfirmModal from '../../components/ConfirmModal'

import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import config from '../../../aws-exports'
Amplify.configure(config)
import { Formik, FieldArray } from 'formik'
import { useFormState, useFormDispatch } from '../../context/form-context'

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

export default function Third({ navigation }) {
  const Lest = { AppForm }
  const form = React.useRef()
  const dispatch = useFormDispatch()
  const { values: formValues, errors: formErrors } = useFormState('customer')

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      if (form.current) {
        const { values, errors } = form.current
        dispatch({
          type: 'UPDATE_FORM',
          payload: {
            id: 'customer',
            data: { values, errors },
          },
        })
      }
    })

    return unsubscribe
  }, [navigation])

  const [isModalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState(null)

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
        title="Roles"
        name="arrow-right-bold"
        iconPress={() => navigation.navigate('Fourth')}
        icon="arrow-left-bold"
        back={() => navigation.navigate('Second')}
      />
      <Formik
        innerRef={form}
        enableReinitialize
        initialValues={formValues}
        initialErrors={formErrors}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleSubmit }) => (
          <View style={styles.mainView}>
            <View style={styles.formView}>
              <View style={styles.roleView}>
                <FieldArray name="collabs">
                  {({ push, remove }) => (
                    <FlatList
                      // contentContainerStyle={{
                      //   alignItems: 'center',
                      //   justifyContent: 'center',
                      //   // backgroundColor: 'blue',
                      //   width: '100%',
                      // }}
                      style={styles.addedCollabsList}
                      data={values.collabs}
                      keyExtractor={(collab) => collab.id}
                      renderItem={({ item, index }) => (
                        <AppFormRadio
                          name={`collabs.${index}`}
                          value1="Producer"
                          value2="Purchaser"
                          formikKey={`collabs.${index}.role`}
                          user={`${item.first} ${item.last}`}
                        />
                      )}
                    />
                  )}
                </FieldArray>
              </View>
            </View>
            <View style={styles.footer}>
              <SubmitButton
                style={styles.nextButton}
                title="Next"
                onPress={() => {
                  navigation.push('Fourth')
                }}
              />
              <View style={styles.iconView}>
                <ButtonIcon
                  onPress={trash}
                  name="delete"
                  backgroundColor="transparent"
                  iconColor={colors.red}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
      <ConfirmModal
        text="Are you sure you'd like to delete?"
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        confirm={trashConfirm}
        deny={trashDeny}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  formView: {
    backgroundColor: colors.gray,
    width: '85%',
    height: '60%',
    paddingLeft: 10,
  },
  titleView: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    flex: 1,
  },
  sectionText: {
    paddingLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  roleView: {
    // backgroundColor: 'blue',
    justifyContent: 'space-evenly',
    flex: 1,
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
    width: '100%',
    // backgroundColor: 'pink',
    // alignSelf: 'flex-end',
    // justifyContent: 'space-between',
  },
  iconView: {
    position: 'absolute',
    right: 10,
  },
  input: {
    width: '90%',
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
    backgroundColor: colors.red,
    width: '50%',
  },
})

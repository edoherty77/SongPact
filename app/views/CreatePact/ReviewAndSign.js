import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import colors from '../../config/colors'
import Screen from '../../components/Screen'
import AppText from '../../components/AppText'
import Header from '../../components/Header'
import { Formik } from 'formik'
import ButtonIcon from '../../components/ButtonIcon'
import ConfirmModal from '../../components/ConfirmModal'
import { useFormState, useFormDispatch } from '../../context/form-context'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import config from '../../../aws-exports'
Amplify.configure(config)

import { SubmitButton } from '../../components/forms'
import * as Yup from 'yup'

export default function ReviewAndSign({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false)
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

  function addPact(values) {
    console.log(values)
  }
  return (
    <Screen>
      <Header
        back={() => navigation.navigate('Second')}
        icon="arrow-left-bold"
        iconPress={() => {
          navigation.navigate('Third')
        }}
      />
      <Formik
        innerRef={form}
        initialValues={formValues}
        initialErrors={formErrors}
        enableReinitialize
      >
        {({ values, errors }) => (
          <View style={styles.mainView}>
            <View style={styles.dataView}>
              {/* <FlatList
                data={Object.keys(values)}
                renderItem={({ item }) => <AppText>{values[item]}</AppText>}
              /> */}
            </View>
            <View style={styles.footer}>
              <SubmitButton
                title="Sign and Send"
                style={styles.nextButton}
                onPress={() => {
                  dispatch({
                    type: 'UPDATE_FORM',
                    payload: {
                      id: 'customer',
                      data: { values, errors },
                    },
                  })
                  addPact(values)
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
    flex: 1,
    // backgroundColor: 'orange',
  },
  footer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconView: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  nextButton: {
    marginBottom: 10,
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.red,
    width: '50%',
  },
})

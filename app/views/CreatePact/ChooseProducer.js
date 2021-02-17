import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import colors from '../../config/colors'
import Screen from '../../components/Screen'
import AppText from '../../components/AppText'
import Header from '../../components/Header'

import ButtonIcon from '../../components/ButtonIcon'
import ConfirmModal from '../../components/ConfirmModal'
import AppButton from '../../components/AppButton'
import { RadioButton } from 'react-native-paper'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import config from '../../../src/aws-exports'
Amplify.configure(config)
import { Formik, FieldArray } from 'formik'
import store from '../../stores/CreatePactStore'
import user from '../../stores/UserStore'

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormRadio,
} from '../../components/forms'
import * as Yup from 'yup'

// const validationSchema = Yup.object().shape({
//   recordTitle: Yup.string().required().label('Record Title'),
//   role: Yup.string().required().label('role'),

// })

export default function ChooseProducer({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState(null)

  function setStoreData() {
    setData(store.collorators)
  }

  useEffect(() => {
    setStoreData()
    // console.log(user)
  }, [])

  function nextScreen(values) {
    store.setProducer(values)
    navigation.navigate('ProducerInfo')
  }

  function trash() {
    setModalVisible(true)
  }

  function trashDeny() {
    setModalVisible(false)
  }

  function trashConfirm() {
    setModalVisible(false)
    store.resetPact()
    navigation.navigate('New')
  }
  const [value, setValue] = React.useState('')
  return (
    <Screen>
      <Header
        title="Producer?"
        icon="arrow-left-bold"
        back={() => navigation.navigate('Collab')}
      />
      <Formik
        initialValues={{ producer: '' }}
        onSubmit={(values) => nextScreen(values)}
        // validationSchema={validationSchema}
      >
        {({ values, errors, handleSubmit, setFieldValue }) => (
          <View style={styles.mainView}>
            <View style={styles.formView}>
              <View style={styles.roleView}>
                <FieldArray name="producer">
                  {({ push, remove }) => (
                    <RadioButton.Group
                      name="producer"
                      onValueChange={(value) => {
                        setFieldValue('producer', value), setValue(value)
                      }}
                      value={value}
                    >
                      <>
                        <AppText>Me</AppText>
                        <RadioButton
                          name="producer"
                          status="unchecked"
                          value={`${user.id}`}
                        />
                      </>
                      <FlatList
                        // contentContainerStyle={{
                        //   alignItems: 'center',
                        //   justifyContent: 'center',
                        //   // backgroundColor: 'blue',
                        //   width: '100%',
                        // }}
                        style={styles.addedCollabsList}
                        data={data}
                        keyExtractor={(data) => data.userId}
                        renderItem={({ item, index }) => (
                          <>
                            <AppText>{`${item.first} ${item.last}`}</AppText>
                            <RadioButton
                              name="producer"
                              value={`${item.userId}`}
                            />
                          </>
                        )}
                      />
                    </RadioButton.Group>
                  )}
                </FieldArray>
              </View>
            </View>
            <View style={styles.footer}>
              <SubmitButton
                style={styles.nextButton}
                title="Next"
                // onPress={() => {
                //   navigation.push('Fourth')
                // }}
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
  input: {
    width: '90%',
    backgroundColor: 'rgba(250, 250, 250, 0.8)',
    fontSize: 18,
    paddingLeft: 20,
    height: 45,
    borderRadius: 25,
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
  nextButton: {
    // marginTop: 10,
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.red,
    width: '50%',
  },
})

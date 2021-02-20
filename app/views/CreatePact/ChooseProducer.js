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

import { Formik, FieldArray } from 'formik'
import store from '../../stores/CreatePactStore'

import { SubmitButton } from '../../components/forms'
import * as Yup from 'yup'

// const validationSchema = Yup.object().shape({
//   recordTitle: Yup.string().required().label('Record Title'),
//   role: Yup.string().required().label('role'),

// })

export default function ChooseProducer({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState(null)
  const [value, setValue] = React.useState('')

  function setStoreData() {
    setData(store.collaborators)
  }

  useEffect(() => {
    setStoreData()
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
  return (
    <Screen>
      <Header
        title="Producer?"
        icon="arrow-left-bold"
        back={() => navigation.navigate('Collabs')}
      />
      <Formik
        enableReinitialize
        initialValues={{ producer: '' }}
        onSubmit={(values) => nextScreen(values)}
        // validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
          <View style={styles.mainView}>
            <View style={styles.formView}>
              <View style={styles.roleView}>
                <FieldArray name="producer">
                  {({}) => (
                    <RadioButton.Group
                      name="producer"
                      onValueChange={(value) => {
                        setFieldValue('producer', value), setValue(value)
                      }}
                      value={value}
                    >
                      <FlatList
                        style={styles.addedCollabsList}
                        data={data}
                        keyExtractor={(data) => data.userId}
                        renderItem={({ item, index }) => (
                          <View style={styles.checkView}>
                            <AppText
                              style={styles.radioName}
                            >{`${item.firstName} ${item.lastName}`}</AppText>
                            <RadioButton.Item
                              // color="pink"
                              name="producer"
                              value={`${item.userId}`}
                            />
                          </View>
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
    // backgroundColor: 'red',
  },
  formView: {
    backgroundColor: colors.gray,
    width: '85%',
    height: '60%',
    // paddingLeft: 10,
  },
  roleView: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  addedCollabsList: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'blue',
    // flex: 1,
    height: '100%',
  },
  checkView: {
    display: 'flex',
    // flexDirection: 'row',
    // position: 'relative',
    // backgroundColor: 'green',
    // height: '100%',
    // width: '100%',
  },
  radioName: {
    // backgroundColor: 'purple',
  },
  radio: {
    // backgroundColor: 'pink',
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

import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Header, Item, Icon, Input } from 'native-base'
import Head from '../../components/Header'
import Screen from '../../components/Screen'
import colors from '../../config/colors'
import AppButton from '../../components/AppButton'
import ContactCheckBox from '../../components/ContactCheckBox'
import UserIcon from '../../components/UserIcon'
import Separator from '../../components/Separator'
import { SubmitButton } from '../../components/forms'
import ButtonIcon from '../../components/ButtonIcon'
import { Formik, FieldArray } from 'formik'

import ConfirmModal from '../../components/ConfirmModal'
import store from '../../stores/CreatePactStore'
const contacts = [
  { firstName: 'Chris', lastName: 'Dibona', userId: 1, artistName: 'Bukkake' },
  {
    firstName: 'Andrew',
    lastName: 'Leinbach',
    userId: 2,
    artistName: 'Fucktard',
  },
  { firstName: 'Steve', lastName: 'Perry', userId: 3, artistName: 'Hippy' },
  { firstName: 'Andrew', lastName: 'Jackson', userId: 4, artistName: 'Boner' },
  { firstName: 'Matt', lastName: 'O', userId: 5, artistName: 'Tits' },
  { firstName: 'Tom', lastName: 'Johnson', userId: 6, artistName: 'Asshole' },
  { firstName: 'Kyle', lastName: 'Mooney', userId: 7, artistName: 'Shit' },
  {
    firstName: 'Michael',
    lastName: 'Bradcliff',
    userId: 8,
    artistName: 'AppleBees',
  },
  { firstName: 'Steve', lastName: 'Pearn', userId: 9, artistName: 'Tacos' },
]

function ChooseCollabs({ navigation }) {
  const nextScreen = (values) => {
    store.setCollabInfo(values)
    navigation.navigate('Producer')
  }
  const [people, setPeople] = useState([])
  // const [isChecked, setIsChecked] = useState(false)

  function chooseCollab(person) {
    // console.log(person)
    setPeople([
      ...people,
      {
        name: person.first,
        id: people.length,
      },
    ])
  }

  const [isModalVisible, setModalVisible] = useState(false)

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
      <Head
        title="Collaborators"
        // icon="arrow-left-bold"
        // back={() => navigation.navigate('First')}
      />
      <View style={styles.mainView}>
        <Formik
          initialValues={{ collabs: [] }}
          onSubmit={(values) => nextScreen(values)}
        >
          {({ values, errors, handleSubmit }) => (
            <View style={styles.formView}>
              <View style={styles.inputView}>
                <Header
                  transparent={true}
                  searchBar
                  noshadow
                  rounded
                  width={300}
                  alignSelf="center"
                >
                  <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                  </Item>
                </Header>
              </View>
              <View style={styles.addedCollabView}>
                <FieldArray name="collabs">
                  {({ push, remove }) => (
                    <FlatList
                      horizontal={true}
                      contentContainerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: 'blue',
                        width: '100%',
                      }}
                      style={styles.addedCollabsList}
                      data={values.collabs}
                      keyExtractor={(collab) => collab.id}
                      renderItem={({ item, index }) => (
                        <UserIcon
                          name={`collabs.${index}`}
                          title={`${item.firstName} ${item.lastName}`}
                          onPress={() => {
                            push(item), chooseCollab(item)
                          }}
                        />
                      )}
                    />
                  )}
                </FieldArray>
              </View>
              <Separator />
              <View style={styles.contactsView}>
                <FieldArray name="collabs">
                  {({ push, remove }) => (
                    <FlatList
                      style={styles.contactsList}
                      contentContainerStyle={{ flexGrow: 1 }}
                      data={contacts}
                      keyExtractor={(item) => item.userId}
                      renderItem={({ item, index }) => (
                        <ContactCheckBox
                          name={`collabs.${index}`}
                          title={`${item.firstName} ${item.lastName}`}
                          onPress={() => {
                            push(item), chooseCollab({ item })
                          }}
                        />
                      )}
                    />
                  )}
                </FieldArray>
              </View>
              <View style={styles.footer}>
                <SubmitButton
                  style={styles.nextButton}
                  title="Next"
                  // onPress={() => {
                  //   navigation.push('Third')
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
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  mainView: {
    // backgroundColor: 'yellow',
    display: 'flex',
    flex: 1,
  },
  formView: {
    // backgroundColor: 'gray',
    flex: 1,
  },
  addedCollabView: {
    display: 'flex',
    flexDirection: 'column',
    height: 70,
    // flex: 1,
  },
  addedCollabsList: {
    // flexWrap: 'wrap',
  },
  inputView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // marginBottom: 5,
    height: 50,
    marginTop: 5,
    // backgroundColor: 'purple',
  },
  contactsView: {
    // backgroundColor: 'orange',
    marginTop: 15,
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

export default ChooseCollabs

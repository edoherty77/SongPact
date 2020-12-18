import React, { useState, Fragment } from 'react'
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native'
import { Header, Item, Icon, Input } from 'native-base'
import Head from '../../components/Header'
import Screen from '../../components/Screen'
import AppText from '../../components/AppText'
import ContactCheckBox from '../../components/ContactCheckBox'
import UserIcon from '../../components/UserIcon'

import { Formik, Field, Form, FieldArray } from 'formik'
import AppButton from '../../components/AppButton'

const contacts = [
  { first: 'Chris', last: 'Dibona', id: 1 },
  { first: 'Andrew', last: 'Leinbach', id: 2 },
  { first: 'Steve', last: 'Perry', id: 3 },
  { first: 'Andrew', last: 'Jackson', id: 4 },
  { first: 'Matt', last: 'O', id: 5 },
  { first: 'Tom', last: 'Johnson', id: 6 },
  { first: 'Kyle', last: 'Mooney', id: 7 },
  { first: 'Kyle', last: 'Mooney', id: 8 },
  { first: 'Kyle', last: 'Mooney', id: 9 },
]

function AddCollaborator({ navigation }) {
  const [people, setPeople] = useState([])
  // const [isChecked, setIsChecked] = useState(false)

  function chooseCollab(person) {
    console.log(person)
    setPeople([
      ...people,
      {
        name: person.first,
        id: people.length,
      },
    ])
  }

  function submit(values) {
    // console.log(values)
  }

  return (
    <Screen>
      <Head
        title="Pick Peeps"
        name="arrow-right-bold"
        iconPress={() => navigation.navigate('Second')}
        icon="arrow-left-bold"
        back={() => navigation.navigate('First')}
      />

      <View style={styles.mainView}>
        <Formik
          initialValues={{ collabs: [] }}
          onSubmit={(values) => submit(values)}
        >
          {({ values, handleSubmit }) => (
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
                          title={`${item.first} ${item.last}`}
                          onPress={() => {
                            push(item), chooseCollab(item)
                          }}
                        />
                      )}
                    />
                  )}
                </FieldArray>
              </View>
              <View style={styles.contactsView}>
                <FieldArray name="collabs">
                  {({ push, remove }) => (
                    <FlatList
                      style={styles.contactsList}
                      contentContainerStyle={{ flexGrow: 1 }}
                      data={contacts}
                      keyExtractor={(contact) => contact.id}
                      renderItem={({ item, index }) => (
                        <ContactCheckBox
                          name={`collabs.${index}`}
                          title={`${item.first} ${item.last}`}
                          onPress={() => {
                            push(item), chooseCollab({ item })
                          }}
                        />
                      )}
                    />
                  )}
                </FieldArray>
              </View>
              <View style={styles.submitView}>
                <Button title="submit" onPress={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
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
  },
  submitView: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
})

export default AddCollaborator

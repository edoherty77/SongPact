import React, { useState, Fragment } from 'react'
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Text,
  FlatList,
} from 'react-native'
import { Header, Item, Icon, Input } from 'native-base'
import Head from '../../components/Header'
import Screen from '../../components/Screen'
import AppText from '../../components/AppText'
import ContactCheckBox from '../../components/ContactCheckBox'

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
]

function AddCollaborator() {
  const [people, setPeople] = useState([])
  // const [isChecked, setIsChecked] = useState(false)

  function chooseCollab(person) {
    setPeople([
      ...people,
      {
        id: people.length,
        person,
      },
    ])
    console.log({ people })
  }
  return (
    <Screen>
      <Head title="gay" />

      <View>
        <Formik
          initialValues={{ collabs: [] }}
          onSubmit={(values) => alert(JSON.stringify(values))}
        >
          {({ values, handleSubmit }) => (
            <View>
              <FieldArray name="collabs">
                {({ push, remove }) => (
                  <FlatList
                    data={values.collabs}
                    keyExtractor={(collab) => collab.id}
                    renderItem={({ item, index }) => (
                      <ContactCheckBox
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
              <FieldArray name="collabs">
                {({ push, remove }) => (
                  <FlatList
                    data={contacts}
                    keyExtractor={(contact) => contact.id}
                    renderItem={({ item, index }) => (
                      <ContactCheckBox
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

              <Button title="submit" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  inputView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
    marginTop: 5,
  },
})

export default AddCollaborator

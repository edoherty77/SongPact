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
import { Formik, FieldArray } from 'formik'
import { useFormState, useFormDispatch } from '../../context/form-context'

const contacts = [
  { first: 'Chris', last: 'Dibona', id: 1 },
  { first: 'Andrew', last: 'Leinbach', id: 2 },
  { first: 'Steve', last: 'Perry', id: 3 },
  { first: 'Andrew', last: 'Jackson', id: 4 },
  // { first: 'Matt', last: 'O', id: 5 },
  // { first: 'Tom', last: 'Johnson', id: 6 },
  // { first: 'Kyle', last: 'Mooney', id: 7 },
  // { first: 'Michael', last: 'Bradcliff', id: 8 },
  // { first: 'Steve', last: 'Pearn', id: 9 },
]

function Second({ navigation }) {
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

  return (
    <Screen>
      <Head
        title="Pick Peeps"
        name="arrow-right-bold"
        iconPress={() => navigation.navigate('Third')}
        icon="arrow-left-bold"
        back={() => navigation.navigate('First')}
      />
      <View style={styles.mainView}>
        <Formik
          innerRef={form}
          initialValues={formValues}
          initialErrors={formErrors}
          enableReinitialize
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
              <Separator />
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
              {/* <View style={styles.submitView}> */}
              <SubmitButton
                style={styles.nextButton}
                title="submit"
                onPress={() => {
                  navigation.push('Third')
                }}
              />
              {/* </View> */}
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
    marginTop: 15,
  },
  submitView: {
    // position: 'absolute',
    // top: 60,
    // right: 20,
    backgroundColor: colors.red,
  },
  nextButton: {
    position: 'absolute',
    borderRadius: 50,
    height: 45,
    right: 100,
    bottom: 20,
    backgroundColor: colors.red,
    width: '50%',
  },
})

export default Second

import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Item, Input, Icon } from 'native-base'
import Head from '../../components/Header'
import Screen from '../../components/Screen'
import AppTextInput from '../../components/AppTextInput'
import ContactButton from '../../components/ContactButton'

import { getUser, listUsers } from '../../../src/graphql/queries'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import AppButton from '../../components/AppButton'

function Contacts({ navigation }) {
  const [firstName, setFirstName] = useState('')

  // const findUsers = async () => {
  //   try {
  //     const allUsers = await API.graphql(graphqlOperation(listUsers))
  //     console.log(allUsers)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   findUsers()
  // }, [])

  return (
    <Screen>
      <Head title="Contacts" />
      {/* <Separator /> */}
      {/* <View style={styles.inputView}>
        <AppTextInput
          width="90%"
          placeholder={"Search"}
          icon={"account-search"}
          style={styles.input}
        />
      </View> */}
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
        {/* <Button transparent>
          <Text>Search</Text>
        </Button> */}
      </Header>

      <View>
        <ContactButton
          name={'Christopher Dibona'}
          onPress={() => console.log('go fuck yourself')}
        />
        <ContactButton name={'Evan Doherty'} />
        <ContactButton name={'Michael Giannone'} />
        <ContactButton name={'Pat Doherty'} />
        <ContactButton name={'Ryan Kleshefsky'} />
        <ContactButton name={'Seth Johnson'} />
        <ContactButton name={'Stephan Nale'} />
        <ContactButton name={'Zack Fye'} />
      </View>
      <AppButton
        title="Find an artist"
        onPress={() => navigation.navigate('Find')}
      />
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

export default Contacts

import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Header, Item, Input, Icon } from 'native-base'
import Head from '../../components/Header'
import Screen from '../../components/Screen'
import AppTextInput from '../../components/AppTextInput'
import ContactButton from '../../components/ContactButton'

import { getUser, listUsers } from '../../../graphql/queries'
import { updateUser, createUser } from '../../../graphql/mutations'
import { createContact } from '../../src/graphql/Queries'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import AppButton from '../../components/AppButton'

import store from '../../stores/UserStore'
import { observer } from 'mobx-react'

const FindArtist = observer(({ navigation }) => {
  const [users, setUsers] = useState('')

  const findUsers = async () => {
    try {
      const getUsers = await API.graphql(graphqlOperation(listUsers))
      // console.log('Data: ', getUsers.data.listUsers.items)
      setUsers(getUsers.data.listUsers.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    findUsers()
  }, [])

  const addFriend = async (friend) => {
    //get current user from API
    const currentUserAPI = await API.graphql(
      graphqlOperation(getUser, { id: store.id }),
    )

    console.log('Friend: ', friend)

    //INSTEAD OF ABOVE, use some sort of add friend mutation OR use the updateUser mutation
  }

  return (
    <Screen>
      <Head title="Find an Artist" />
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

      <View>
        <FlatList
          data={users}
          keyExtractor={(user) => user.id}
          renderItem={({ item, index }) => (
            <ContactButton
              name={item.firstName + ' ' + item.lastName}
              onPress={() => {
                addFriend(item)
              }}
            />
          )}
        />
      </View>
      <AppButton
        title="Your Contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
    </Screen>
  )
})

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

export default FindArtist

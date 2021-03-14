import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Header, Item, Input, Icon } from 'native-base'
import Head from '../../components/Header'
import Screen from '../../components/Screen'
import AppTextInput from '../../components/AppTextInput'
import ContactButton from '../../components/ContactButton'
import ConfirmModal from '../../components/ConfirmModal'
import { getUser, listUsers } from '../../../src/graphql/queries'
import { createFriend } from '../../../src/graphql/mutations'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import AppButton from '../../components/AppButton'

import store from '../../stores/UserStore'
import { observer } from 'mobx-react'

const FindArtist = observer(({ navigation }) => {
  const [users, setUsers] = useState('')
  const [friendInfo, setFriendInfo] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)
  const currentUser = store

  const findUsers = async () => {
    try {
      const getUsers = await API.graphql(graphqlOperation(listUsers))
      const arr = getUsers.data.listUsers.items
      const getOtherUsers = arr.filter(function (users) {
        return users.id !== store.id
      })
      setUsers(getOtherUsers)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    findUsers()
    console.log('STORE', store)
  }, [])

  function cancel() {
    setModalVisible(false)
    console.log(currentUser)
  }

  const addFriend = async () => {
    const currentUserId = store.id
    const friendId = friendInfo.id
    await API.graphql(
      graphqlOperation(createFriend, {
        input: { friendUserId: currentUserId, receiverId: friendId },
      }),
    )
    await API.graphql(
      graphqlOperation(createFriend, {
        input: { friendUserId: friendId, receiverId: currentUserId },
      }),
    )
    console.log('FRIEND INFO', currentUserId)
    console.log('CURRENT', friendId)
    setModalVisible(false)
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
                setModalVisible(true)
                setFriendInfo(item)
              }}
            />
          )}
        />
      </View>
      <AppButton
        title="Your Contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
      <ConfirmModal
        text="Add Friend?"
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        confirm={addFriend}
        deny={cancel}
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

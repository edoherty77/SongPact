import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Header, Item, Input, Icon } from 'native-base'
import Head from '../../components/Header'
import Screen from '../../components/Screen'
import AppTextInput from '../../components/AppTextInput'
import ContactButton from '../../components/ContactButton'

import { getUser, listUsers } from '../../../src/graphql/queries'
import { deleteFriend, updateUser } from '../../../src/graphql/mutations'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import AppButton from '../../components/AppButton'
import store from '../../stores/UserStore'

function Contacts({ navigation }) {
  const onMenuPress = async (person) => {
    const foundFriend = await API.graphql(
      graphqlOperation(getUser, { id: person.userId }),
    )

    console.log('FOUNDFRIEND', foundFriend)
    const friendsFriendshipId = foundFriend.data.getUser.friends.items.find(
      (item) => {
        return (item = store.id)
      },
    )
    const currentUserFriendshipId = store.friends.items.find((item) => {
      return (item = person.id)
    })

    await API.graphql(
      graphqlOperation(deleteFriend, {
        input: { id: friendsFriendshipId.id },
      }),
    )
    await API.graphql(
      graphqlOperation(deleteFriend, {
        input: { id: currentUserFriendshipId.id },
      }),
    )

    // console.log('FRIENDSFRIENDSIPID', friendsFriendshipId.id)
    // console.log('CURRENT', currentUserFriendshipId.id)
    // // console.log('MENUPRESS', person)
  }

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
        <FlatList
          data={store.friends.items}
          keyExtractor={(user) => user.id}
          renderItem={({ item, index }) => (
            <ContactButton
              name={item.firstName + ' ' + item.lastName}
              menuPress={() => onMenuPress(item)}
              onPress={() => {
                // setModalVisible(true)
                // setFriendInfo(item)
              }}
            />
          )}
        />
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

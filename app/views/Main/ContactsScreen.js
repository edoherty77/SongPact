import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Header, Item, Input, Icon, Button, Text } from 'native-base'
import Head from '../../components/Header'
import Screen from '../../components/Screen'
import AppTextInput from '../../components/AppTextInput'
import ContactButton from '../../components/ContactButton'

function Contacts() {
  const [firstName, setFirstName] = useState('')
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

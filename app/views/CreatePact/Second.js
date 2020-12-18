import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../../components/Screen'
import Header from '../../components/Header'

export default function Second({ navigation }) {
  return (
    <Screen>
      <Header
        title="Titties"
        name="arrow-right-bold"
        // iconPress={() => navigation.navigate('Second')}
        icon="arrow-left-bold"
        back={() => navigation.navigate('AddCollab')}
      />
      <Text>Second page</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({})

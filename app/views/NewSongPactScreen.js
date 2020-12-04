import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import Header from '../components/Header'
import Separator from '../components/Separator'
import AppText from '../components/AppText'
import ButtonIcon from '../components/ButtonIcon'
import NewPactButton from '../components/NewPactButton'
import colors from '../config/colors'

function NewSongPact() {
  return (
    <Screen>
      <Header title="New Pact" />
      <Separator />
      <View style={styles.mainView}>
        <NewPactButton name="Producers Agreement" />
        <NewPactButton name="Remix Agreement" />
        <NewPactButton name="Beat Agreement" />
        <NewPactButton name="Random Agreement" />
        <NewPactButton name="Random Agreement" />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    // flex: 1,
  },
})

export default NewSongPact

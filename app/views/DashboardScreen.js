import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import ButtonIcon from '../components/ButtonIcon'
import AppButton from '../components/AppButton'
import colors from '../config/colors'
import Screen from '../components/Screen'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import PactButton from '../components/PactButton'
import Separator from '../components/Separator'

function DashboardScreen() {
  return (
    <Screen>
      <Header title="Dashboard" />
      <SubHeader name="magnify" text="Your Pacts" />
      <Separator />
      <View style={styles.options}>
        <Text style={styles.optionsText}>Open</Text>
        <Text
          style={[styles.optionsText, { fontWeight: 'bold', fontSize: 18 }]}
        >
          Needs Action
        </Text>
        <Text style={styles.optionsText}>All</Text>
      </View>
      <View style={styles.pactList}>
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
        <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  options: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 20,
    color: colors.white,
  },
  optionsText: {
    fontWeight: 'bold',
    color: colors.white,
    fontFamily: 'Courier',
  },
  pactList: {
    padding: 10,
  },
})

export default DashboardScreen

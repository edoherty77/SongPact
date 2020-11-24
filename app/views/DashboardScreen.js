import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import ButtonIcon from '../components/ButtonIcon'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen'
import Header from '../components/Header'
import PactButton from '../components/PactButton'

function DashboardScreen() {
  return (
    <Screen>
      <Header title="Dashboard" />
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Your Pacts</Text>
        <ButtonIcon
          name="magnify"
          backgroundColor="transparent"
          // backgroundColor="red"
          iconColor="#FFFAFF"
          style={{ paddingBottom: 20 }}
        />
      </View>
      <View
        style={{
          borderBottomColor: 'lightgray',
          borderBottomWidth: 1,
          width: '100%',
          backgroundColor: 'red',
        }}
      />
      <View style={styles.options}>
        <Text style={{ color: '#FFFAFF', fontFamily: 'Courier' }}>Open</Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#FFFAFF',
            fontFamily: 'Courier',
          }}
        >
          Needs Action
        </Text>
        <Text style={{ color: '#FFFAFF', fontFamily: 'Courier' }}>All</Text>
      </View>
      <View style={styles.pactList}>
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
    color: '#FFFAFF',
  },
  pactList: {
    padding: 10,
  },
  subHeader: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    // paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  subHeaderText: {
    fontSize: 35,
    color: '#FFFAFF',
    fontWeight: 'bold',
    fontFamily: 'Courier',
  },
})

export default DashboardScreen

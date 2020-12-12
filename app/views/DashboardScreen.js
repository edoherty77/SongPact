import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

import colors from '../config/colors'
import Screen from '../components/Screen'
import Head from '../components/Header'
import PactButton from '../components/PactButton'

import OpenList from '../components/UserPacts/OpenList'
import NeedsActionList from '../components/UserPacts/NeedsActionList'
import AllList from '../components/UserPacts/AllList'

import AppText from '../components/AppText'

import defaultStyles from '../config/styles'
import GET_ALL_USERS from '../src/graphql/Queries'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
} from 'native-base'

function DashboardScreen({ navigation }) {
  async function signOut() {
    try {
      await Auth.signOut()
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }
  return (
    <Screen>
      <Head
        title="Your Pacts"
        onPress={signOut}
        borderBottomColor="transparent"
        borderBottomWidth={0}
      />
      <View style={styles.tabView}>
        <Tabs
          locked={true}
          initialPage={1}
          tabBarUnderlineStyle={{ backgroundColor: 'red' }}
          tabContainerStyle={{ borderColor: 'black' }}
        >
          <Tab
            tabStyle={{ backgroundColor: 'blue' }}
            heading={
              <TabHeading
                style={{ backgroundColor: colors.gray }}
                activeTextStyle={{ fontWeight: 'bold', fontSize: 40 }}
              >
                <AppText>Open</AppText>
              </TabHeading>
            }
          >
            <OpenList />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: colors.gray }}>
                <AppText>Needs Action</AppText>
              </TabHeading>
            }
          >
            <NeedsActionList />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: colors.gray }}>
                <AppText>All</AppText>
              </TabHeading>
            }
          >
            <AllList />
          </Tab>
        </Tabs>
      </View>
      <View style={styles.contactsView}>
        <View style={styles.contactText}>
          <AppText
            style={{ marginBottom: 5 }}
            fontWeight={'bold'}
            fontSize={20}
            color={colors.black}
          >
            Recent Contacts:
          </AppText>
          <AppText
            onPress={() => navigation.navigate('Contacts')}
            color={colors.red}
          >
            See All
          </AppText>
        </View>
        <View style={styles.contactList}>
          <View style={styles.circle}>
            <AppText
              fontWeight="bold"
              fontSize={25}
              color={colors.red}
              style={styles.initials}
            >
              ED
            </AppText>
          </View>
          <View style={styles.circle}>
            <AppText
              fontWeight="bold"
              fontSize={25}
              color={colors.red}
              style={styles.initials}
            >
              KT
            </AppText>
          </View>
          <View style={styles.circle}>
            <AppText
              fontWeight="bold"
              fontSize={25}
              color={colors.red}
              style={styles.initials}
            >
              RJ
            </AppText>
          </View>
        </View>
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
  },
  optionsText: {
    fontWeight: 'bold',
    color: colors.red,
    // fontFamily: 'Courier',
  },
  tabView: {
    flex: 6,
  },
  pactList: {
    padding: 10,
    // backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    elevation: 1,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
  contactsView: {
    // backgroundColor: 'green',
    marginLeft: 10,
    marginRight: 10,
    // marginTop: 5,
    padding: 10,
    flex: 1,
  },
  contactText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  contactList: {
    display: 'flex',
    flexDirection: 'row',
  },
  circle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lttan,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
})

export default DashboardScreen

import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Auth } from "aws-amplify"

import colors from "../config/colors"
import Screen from "../components/Screen"
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import PactButton from "../components/PactButton"
import Separator from "../components/Separator"
import ButtonIcon from "../components/ButtonIcon"
import AppText from "../components/AppText"

import defaultStyles from "../config/styles"
import GET_ALL_USERS from "../src/graphql/Queries"
import { Colors } from "react-native/Libraries/NewAppScreen"
import store from "../stores/TestStore"
import { observer } from "mobx-react"

const DashboardScreen = observer(() => {
  useEffect(() => {
    store
  }, [store])

  const headerPress = async () => {
    await Auth.signOut()
  }

  return (
    <Screen>
      <Header title="Your Pacts" onPress={headerPress} />

      <View style={styles.separatorView}>
        <Separator />
      </View>
      <View style={styles.options}>
        <Text onPress={() => console.log("pressed")} style={styles.optionsText}>
          Open
        </Text>
        <Text
          style={[
            styles.optionsText,
            { color: colors.five, fontWeight: "bold", fontSize: 18 },
          ]}
          onPress={() => console.log("pressed")}
        >
          Needs Action
        </Text>
        <Text onPress={() => console.log("pressed")} style={styles.optionsText}>
          All
        </Text>
      </View>
      <View style={styles.pactList}>
        <PactButton
          status="pending"
          name={store.email ? store.email : "Mark"}
          title="Adrift"
          type="Remix"
        />
        <PactButton
          status="pending"
          name="Stephan"
          title="A Walk"
          type="Producer"
        />
        <PactButton status="pending" name="Me" title="Closer" type="Beat" />
        <PactButton status="pending" name="Seth" title="Orbit" type="Remix" />
        <PactButton status="pending" name="Me" title="Around" type="Producer" />
        {/* <PactButton status="pending" name="Seth" title="Adrift" type="Remix" /> */}
      </View>
      <View style={styles.contactsView}>
        <View style={styles.contactText}>
          <AppText
            style={{ marginBottom: 5 }}
            fontWeight={"bold"}
            fontSize={20}
            color={colors.black}
          >
            Recent Contacts:
          </AppText>
          <AppText color={colors.red}>See All</AppText>
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
})

const styles = StyleSheet.create({
  options: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 20,
  },
  optionsText: {
    fontWeight: "bold",
    color: colors.red,
    // fontFamily: 'Courier',
  },
  pactList: {
    padding: 10,
    // backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    elevation: 1,
    shadowColor: "rgb(50,50,50)",
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
  separatorView: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  contactsView: {
    // backgroundColor: 'green',
    marginLeft: 10,
    marginRight: 10,
    // marginTop: 5,
    padding: 10,
  },
  contactText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  contactList: {
    display: "flex",
    flexDirection: "row",
  },
  circle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lttan,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
})

export default DashboardScreen

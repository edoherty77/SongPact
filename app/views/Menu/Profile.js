import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AppText from "../../components/AppText"
import Header from "../../components/Header"
import Screen from "../../components/Screen"

import store from "../../stores/UserStore"

const Profile = () => {
  return (
    <Screen>
      <Header title="My Info" noIcon />
      <View style={styles.stateDisplay}>
        <AppText>Now presenting...</AppText>
        <AppText>
          {store.firstName} {store.lastName}, aka {store.artistName}
        </AppText>
        {store.companyName && <AppText>of {store.companyName}</AppText>}
        <AppText></AppText>
        <AppText>Address:</AppText>
        <AppText>{store.address}</AppText>
        <AppText>
          {store.city}, {store.state}
        </AppText>
        <AppText>{store.zipCode}</AppText>
        <AppText></AppText>
        <AppText>Email: {store.email}</AppText>
      </View>
    </Screen>
  )
}

export default Profile

const styles = StyleSheet.create({})

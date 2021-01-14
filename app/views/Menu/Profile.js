import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Header from "../../components/Header"
import Screen from "../../components/Screen"

import store from "../../stores/UserStore"

const Profile = () => {
  return (
    <Screen>
      <Header title="My Info" noIcon />
      <View style={styles.stateDisplay}>
        <AppText>ID: {store.id}</AppText>
        <AppText>First: {store.firstName}</AppText>
        <AppText>Last: {store.lastName}</AppText>
        <AppText>Artist: {store.artistName}</AppText>
        <AppText>Company: {store.companyName}</AppText>
        <AppText>Email: {store.email}</AppText>
        <AppText>Address: {store.address}</AppText>
        <AppText>City: {store.city}</AppText>
        <AppText>State: {store.state}</AppText>
        <AppText>Zip: {store.zipCode}</AppText>
      </View>
    </Screen>
  )
}

export default Profile

const styles = StyleSheet.create({})

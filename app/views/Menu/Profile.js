import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AppText from "../../components/AppText"
import ButtonIcon from "../../components/ButtonIcon"
import Header from "../../components/Header"
import Screen from "../../components/Screen"
import ButtonText from "../../components/ButtonText"

import store from "../../stores/UserStore"

const Profile = () => {
  return (
    <Screen style={styles.container}>
      <Header title="My Info" noIcon />
      <View style={styles.main}>
        <AppText style={styles.title}>Now presenting...</AppText>
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
        <ButtonText
          style={styles.editBtn}
          title="Edit Info"
          onPress={() => console.log("edit pressed")}
        />
      </View>
    </Screen>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
  },
  main: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    color: "#202020",
    fontWeight: "500",
    marginVertical: 15,
  },
  editBtn: {
    marginVertical: 20,
  },
})

import { observer } from "mobx-react"
import React from "react"
import { View, StyleSheet } from "react-native"
import AppText from "../../components/AppText"
import AppTextInput from "../../components/AppTextInput"

import Header from "../../components/Header"
import colors from "../../config/colors"
import store from "../../stores/UserStore"

const NotificationsScreen = observer(() => {
  return (
    <View style={styles.notifications}>
      <Header title="Notifications" />
      <View style={styles.stateDisplay}>
        <AppText>Email: {store.firstName}</AppText>
        <AppText>Email: {store.lastName}</AppText>
        <AppText>Email: {store.artistName}</AppText>
        <AppText>Email: {store.companyName}</AppText>
        <AppText>Email: {store.email}</AppText>
      </View>
      <View style={styles.update}>
        <AppTextInput
          width="90%"
          placeholder="Update email"
          icon={"account-search"}
          style={styles.input}
          autoCompleteType={"off"}
          autoCorrect={false}
          onChangeText={(text) => store.updateEmail(text)}
        />
      </View>
    </View>
  )
})

export default NotificationsScreen

const styles = StyleSheet.create({
  notifications: {
    flex: 1,
    backgroundColor: "#30BCED",
  },
  stateDisplay: {
    flex: 1,
    marginHorizontal: 30,
  },
  update: {
    flex: 1,
    marginHorizontal: 30,
  },
  input: {},
})

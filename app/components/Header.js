import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"

import ButtonIcon from "./ButtonIcon"

const Header = ({ title }) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.appHeader}>
        <Text style={styles.screenName}>{title}</Text>

        <ButtonIcon
          style={styles.messageBtn}
          iconColor="#303036"
          size={45}
          name="message-text"
        />
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  appHeader: {
    flexDirection: "row",
    // backgroundColor: 'green',
    justifyContent: "space-between",
    padding: 20,
  },
  screenName: {
    fontSize: 50,
    // padding: 20,
    color: "#FFFAFF",
    fontWeight: "bold",
    // backgroundColor: 'blue',
  },
  messageBtn: {
    paddingTop: 10,
    backgroundColor: "transparent",
    // backgroundColor: '#FFFAFF',
  },
})

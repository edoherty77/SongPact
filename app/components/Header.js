import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"

import ButtonIcon from "./ButtonIcon"
import defaultStyles from "../config/styles"

const Header = ({ title, noIcon }) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.appHeader}>
        <Text style={styles.screenName}>{title}</Text>

        {!noIcon && (
          <ButtonIcon
            style={styles.messageBtn}
            iconColor={defaultStyles.colors.white}
            size={45}
            name="message-text"
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
  appHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  screenName: {
    fontSize: 50,
    fontFamily: defaultStyles.fontFamily,
    color: defaultStyles.colors.white,
    fontWeight: "bold",
  },
  messageBtn: {
    color: defaultStyles.colors.white,
    backgroundColor: "transparent",
  },
})

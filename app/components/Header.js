import React from "react"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"

import ButtonIcon from "./ButtonIcon"
import defaultStyles from "../config/styles"
import AppText from "../components/AppText"
import colors from "../config/colors"

const Header = ({ title, noIcon, ...otherProps }) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.appHeader}>
        <AppText style={styles.screenName}>{title}</AppText>

        {!noIcon && (
          <ButtonIcon
            style={styles.messageBtn}
            iconColor={colors.red}
            size={45}
            name="message-text"
            backgroundColor="transparent"
            {...otherProps}
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

    // fontFamily: 'Futura',
    color: colors.black,
    fontWeight: "bold",
  },
  messageBtn: {
    marginTop: 4,
    // color: defaultStyles.colors.black,
    // backgroundColor: 'transparent',
  },
})

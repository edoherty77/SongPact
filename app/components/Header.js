import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import ButtonIcon from './ButtonIcon'
import defaultStyles from '../config/styles'
import AppText from '../components/AppText'
import colors from '../config/colors'

const Header = ({
  onPress,
  title,
  noIcon,
  borderBottomColor,
  borderBottomWidth,
  ...otherProps
}) => {
  return (
    <SafeAreaView
      style={[styles.screenContainer, { borderBottomColor, borderBottomWidth }]}
    >
      <View style={styles.appHeader} onPress={onPress}>
        <View style={{ flex: 1 }}></View>
        <View style={{ alignItems: 'center', flex: 5 }}>
          <AppText style={styles.screenName}>{title}</AppText>
        </View>

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
  screenContainer: {
    backgroundColor: colors.gray,
    borderBottomColor: 'black',
    elevation: 1,
    borderBottomWidth: 0.4,
  },
  appHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  screenName: {
    fontSize: 40,
    color: colors.black,
    // fontWeight: "bold",
  },
  messageBtn: {
    // marginTop: 4,
    // color: defaultStyles.colors.black,
    // backgroundColor: 'transparent',
  },
})

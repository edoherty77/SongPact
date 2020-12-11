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

        <View style={styles.iconView}>
          {!noIcon && (
            <ButtonIcon
              style={styles.messageBtn}
              iconColor={colors.red}
              size={40}
              name="message-text"
              backgroundColor="transparent"
            />
          )}
        </View>
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
    // justifyContent: 'space-evenly',
    marginBottom: 10,
    // backgroundColor: colors.lttan,
  },
  screenName: {
    fontSize: 40,
    color: colors.black,
    // fontWeight: 'bold',
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBtn: {
    // marginTop: 4,
    // color: defaultStyles.colors.black,
    // backgroundColor: 'transparent',
  },
})

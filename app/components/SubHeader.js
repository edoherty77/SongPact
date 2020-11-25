import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ButtonIcon from './ButtonIcon'
import colors from '../config/colors'

const SubHeader = ({ text, name }) => {
  return (
    <View style={styles.subHeader}>
      <Text style={styles.subHeaderText}>{text}</Text>
      <ButtonIcon
        name={name}
        backgroundColor="transparent"
        iconColor={colors.white}
        style={{ paddingBottom: 20 }}
      />
    </View>
  )
}

export default SubHeader

const styles = StyleSheet.create({
  subHeader: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  subHeaderText: {
    fontSize: 35,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: 'Courier',
  },
})

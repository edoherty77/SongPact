import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

function Separator({ Children }) {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    width: '85%',
  },
})

export default Separator

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'

function Separator({ Children }) {
  return <View style={styles.separator} />
}

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    width: '100%',
  },
})

export default Separator

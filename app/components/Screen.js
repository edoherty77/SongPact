import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import colors from '../config/colors'

const Screen = ({ children }) => {
  return <View style={styles.screen}>{children}</View>
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
})

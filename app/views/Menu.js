import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'

function Menu() {
  return (
    <View style={styles.menu}>
      <Header title="Menu" />
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#30BCED',
  },
})

export default Menu

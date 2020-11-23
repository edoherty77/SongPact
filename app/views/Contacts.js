import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'

function Contacts() {
  return (
    <View style={styles.contacts}>
      <Header title="Contacts" />
    </View>
  )
}

const styles = StyleSheet.create({
  contacts: {
    flex: 1,
    backgroundColor: '#30BCED',
  },
})

export default Contacts

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'

function Notifications() {
  return (
    <View style={styles.notifications}>
      <Header title="Notifications" />
    </View>
  )
}

const styles = StyleSheet.create({
  notifications: {
    flex: 1,
    backgroundColor: '#30BCED',
  },
})

export default Notifications

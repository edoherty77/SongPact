import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import Header from '../components/Header'

function Contacts() {
  return (
    <LinearGradient
      colors={['#448AFF', '#9E9E9E', '#FFEB3B', '#FF5722']}
      style={{ flex: 1 }}
    />
  )
}

const styles = StyleSheet.create({
  // contacts: {
  //   flex: 1,
  //   backgroundColor: '#30BCED',
  // },
})

export default Contacts

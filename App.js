import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default function App() {
  console.log('yo')
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dashboard</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

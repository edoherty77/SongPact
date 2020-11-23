import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  console.log('yo')
  return (
    <View style={styles.container}>
      <Text>fuck u</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(' + 164 + ',' + 241 + ',' + 164 + ')',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import ButtonIcon from '../components/ButtonIcon'
import AppButton from '../components/AppButton'

function Dashboard() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.appHeader}>
        <Text style={styles.appName}>SongPact</Text>

        <ButtonIcon
          style={styles.messageBtn}
          iconColor="#303036"
          size={45}
          name="message-text"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appHeader: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
    padding: 20,
  },
  appName: {
    fontSize: 50,
    // padding: 20,
    color: '#FFFAFF',
    fontWeight: 'bold',
    // backgroundColor: 'blue',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
    alignItems: 'flex-end',
  },
  messageBtn: {
    paddingTop: 10,
    backgroundColor: 'transparent',
    // backgroundColor: '#FFFAFF',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#30BCED',
  },
})

export default Dashboard

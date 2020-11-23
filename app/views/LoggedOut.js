import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ButtonIcon from '../components/ButtonIcon'
import AppButton from '../components/AppButton'

function LoggedOut() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.appHeader}>
        <Text style={styles.appName}>SongPact</Text>

        <ButtonIcon
          style={styles.messageBtn}
          iconColor="#303036"
          size={45}
          name="message-text"
        />
      </View>
      <View style={styles.footer}>
        <Text>Icon</Text>
        <Text>Icon</Text>
        <Text>Icon</Text>
        <Text>Icon</Text>
      </View>
    </View>
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
    color: '#303036',
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
  profileBtn: {
    backgroundColor: 'lightgreen',
    width: 60,
    height: 60,
    padding: 0,

    // margin: 5,
  },
  screenContainer: {
    flex: 1,
  },
})

export default LoggedOut

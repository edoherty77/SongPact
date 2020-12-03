import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import AppText from '../components/AppText'
import colors from '../config/colors'

const PactButton = ({ type, title, name, status }) => {
  return (
    <TouchableOpacity style={styles.pactButton}>
      <View style={styles.top}>
        <AppText style={[styles.text, { fontWeight: 'bold', fontSize: 25 }]}>
          {title}
        </AppText>
        <AppText style={styles.text}>Type: {type}</AppText>
      </View>
      <View style={styles.bottom}>
        <AppText style={styles.text}>
          Started By: <AppText style={styles.text}>{name}</AppText>
        </AppText>
        <AppText style={styles.text}>
          Status:{' '}
          <AppText
            style={[styles.text, { fontWeight: 'bold', color: 'black' }]}
          >
            {status}
          </AppText>
        </AppText>
      </View>
    </TouchableOpacity>
  )
}

export default PactButton

const styles = StyleSheet.create({
  bottom: {
    margin: 5,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pactButton: {
    backgroundColor: colors.red,
    // marginLeft: 10,
    // marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontFamily: 'Courier',
  },
  top: {
    margin: 5,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

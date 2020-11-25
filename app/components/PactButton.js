import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

const PactButton = ({ type, title, name, status }) => {
  return (
    <TouchableOpacity style={styles.pactButton}>
      <View style={styles.top}>
        <Text style={[styles.text, { fontWeight: 'bold', fontSize: 25 }]}>
          {title}
        </Text>
        <Text style={styles.text}>Type: {type}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.text}>
          Started By: <Text style={styles.text}>{name}</Text>
        </Text>
        <Text style={styles.text}>
          Status:{' '}
          <Text style={[styles.text, { color: colors.pending }]}>{status}</Text>
        </Text>
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
    backgroundColor: colors.secondary,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: colors.white,
    fontFamily: 'Courier',
  },
  top: {
    margin: 5,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

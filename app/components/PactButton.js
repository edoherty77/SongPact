import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const PactButton = ({ type, title, name, status }) => {
  return (
    <TouchableOpacity style={styles.pact}>
      <View style={styles.top}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#FFFAFF',
            fontFamily: 'Courier',
          }}
        >
          {title}
        </Text>
        <Text style={{ color: '#FFFAFF', fontFamily: 'Courier' }}>
          Type: {type}
        </Text>
      </View>
      <View style={styles.bottom}>
        <Text style={{ color: '#FFFAFF', fontFamily: 'Courier' }}>
          Started By:{' '}
          <Text style={{ color: '#30BCED', fontFamily: 'Courier' }}>
            {name}
          </Text>
        </Text>
        <Text style={{ color: '#FFFAFF', fontFamily: 'Courier' }}>
          Status:{' '}
          <Text style={{ color: 'yellow', fontFamily: 'Courier' }}>
            {status}
          </Text>
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
  pact: {
    backgroundColor: '#303036',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  top: {
    margin: 5,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ButtonIcon from '../components/ButtonIcon'
import AppButton from '../components/AppButton'
import Header from '../components/Header'

function Dashboard() {
  return (
    <View style={styles.dashboard}>
      <Header title="Dashboard" />
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <Text style={styles.pactHeader}>Your Pacts</Text>
          <ButtonIcon
            name="magnify"
            backgroundColor="transparent"
            iconColor="#303036"
          />
        </View>
        <View
          style={{
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            width: '100%',
            backgroundColor: 'red',
          }}
        />
        <View style={styles.options}>
          <Text>Open</Text>
          <Text style={{ fontWeight: 'bold' }}>Needs Action</Text>
          <Text>All</Text>
        </View>
        <View style={styles.pact}>
          <View style={styles.top}>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', color: '#FFFAFF' }}
            >
              A Walk
            </Text>
            <Text style={{ color: '#FFFAFF' }}>Type: Producer</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={{ color: '#FFFAFF' }}>
              Started By: <Text style={{ color: '#30BCED' }}>Stephan</Text>
            </Text>
            <Text style={{ color: '#FFFAFF' }}>
              Status:<Text style={{ color: 'yellow' }}> Pending</Text>
            </Text>
          </View>
        </View>
        <View style={styles.pact}>
          <View style={styles.top}>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', color: '#FFFAFF' }}
            >
              Adrift
            </Text>
            <Text style={{ color: '#FFFAFF' }}>Type: Remix</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={{ color: '#FFFAFF' }}>
              Started By: <Text style={{ color: '#30BCED' }}>Seth</Text>
            </Text>
            <Text style={{ color: '#FFFAFF' }}>
              Status:<Text style={{ color: 'yellow' }}> Pending</Text>
            </Text>
          </View>
        </View>
        <View style={styles.pact}>
          <View style={styles.top}>
            <Text
              style={{ fontSize: 25, fontWeight: 'bold', color: '#FFFAFF' }}
            >
              Japan
            </Text>
            <Text style={{ color: '#FFFAFF' }}>Type: Producer</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={{ color: '#FFFAFF' }}>
              Started By: <Text style={{ color: '#30BCED' }}>You</Text>
            </Text>
            <Text style={{ color: '#FFFAFF' }}>
              Status:<Text style={{ color: 'yellow' }}> Pending</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    backgroundColor: '#30BCED',
  },
  modalHeader: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  modal: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FFFAFF',
  },
  options: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 20,
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
  bottom: {
    margin: 5,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pactHeader: {
    fontSize: 35,
    color: '#303036',
    fontWeight: 'bold',
  },
})

export default Dashboard

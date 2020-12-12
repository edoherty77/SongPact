import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import Header from '../components/Header'

import NewPactButton from '../components/NewPactButton'
import colors from '../config/colors'
import { AppLoading } from 'expo'

function NewSongPact() {
  const pics = {
    drake: require('../assets/drake.jpg'),
    fkj: require('../assets/FKJ.jpg'),
    remix: require('../assets/remix.jpg'),
    post: require('../assets/post.jpeg'),
    location: require('../assets/location.jpg'),
    work: require('../assets/work.jpeg'),
  }
  return (
    <Screen>
      <Header title="Create A Pact" />
      <View style={styles.mainView}>
        <View style={styles.rowView}>
          <NewPactButton
            name="Producer"
            image={pics.drake}
            info="producer shit blah blah blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"
          />
          <NewPactButton
            name="Creative Services"
            image={pics.fkj}
            info="creative shit blah blah blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"
          />
        </View>
        <View style={styles.rowView}>
          <NewPactButton
            name="Remixer"
            image={pics.remix}
            info="remixer shit blah blah blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"
          />
          <NewPactButton
            name="Side Artist"
            image={pics.post}
            info="side artist shit blah blah blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"
          />
        </View>
        <View style={styles.rowView}>
          <NewPactButton
            name="Work for Hire"
            image={pics.work}
            info="wfh shit blah blah blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"
          />
          <NewPactButton
            name="Location/Property Release"
            image={pics.location}
            info="location shit blah blah blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah"
          />
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor: '#FEECEF',
  },
  rowView: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default NewSongPact

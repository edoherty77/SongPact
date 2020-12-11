import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PactButton from '../PactButton'

const NeedsActionList = () => {
  return (
    <View style={styles.pactList}>
      <PactButton status="pending" name="Mark" title="Adrift" type="Remix" />
      <PactButton
        status="pending"
        name="Stephan"
        title="A Walk"
        type="Producer"
      />
      <PactButton status="pending" name="Me" title="Closer" type="Beat" />
      <PactButton status="pending" name="Seth" title="Orbit" type="Remix" />
      <PactButton status="pending" name="Me" title="Around" type="Producer" />
      <PactButton status="pending" name="Seth" title="Adrift" type="Remix" />
    </View>
  )
}

const styles = StyleSheet.create({
  pactList: {
    padding: 10,
    // backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    elevation: 1,
    shadowColor: 'rgb(50,50,50)',
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
})

export default NeedsActionList

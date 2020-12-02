import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import AppText from '../components/AppText'
import ButtonIcon from '../components/ButtonIcon'
import colors from '../config/colors'

const NewPactButton = ({ name }) => {
  return (
    <TouchableOpacity style={styles.newPactButton}>
      <View style={styles.buttonView}>
        <AppText color={colors.white} fontSize={30}>
          {name}
        </AppText>
        <ButtonIcon
          name="information"
          backgroundColor={'transparent'}
          size={30}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  newPactButton: {
    backgroundColor: colors.secondary,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 5,
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default NewPactButton

import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Header from '../components/Header'
import Screen from '../components/Screen'
import Separator from '../components/Separator'
import AppTextInput from '../components/AppTextInput'
import SubHeader from '../components/SubHeader'
import AppText from '../components/AppText'
import colors from '../config/colors'
import ButtonIcon from '../components/ButtonIcon'

const ContactButton = ({ initials, name }) => {
  return (
    <TouchableOpacity style={styles.contactButton}>
      <View style={styles.info}>
        <View style={styles.photoNameView}>
          <View style={styles.photoView}>
            <AppText fontSize={25} style={styles.photo}>
              {initials}
            </AppText>
          </View>
          <AppText fontSize={25} style={styles.name}>
            {name}
          </AppText>
        </View>
        <ButtonIcon
          name="dots-horizontal"
          backgroundColor={'transparent'}
          size={35}
          style={styles.moreInfo}
        />
      </View>
    </TouchableOpacity>
  )
}

export default ContactButton

const styles = StyleSheet.create({
  contactButton: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photoNameView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    paddingLeft: 10,
  },
  moreInfo: {},
})

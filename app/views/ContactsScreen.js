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

function Contacts() {
  const [firstName, setFirstName] = useState('')
  return (
    <Screen>
      <Header title="Contacts" />
      <AppTextInput
        width="100%"
        placeholder={'Search'}
        icon={'account-search'}
        style={styles.input}
      />
      {/* <SubHeader /> */}
      <Separator />
      <View>
        <TouchableOpacity style={styles.contactButton}>
          <View style={styles.info}>
            <View style={styles.photoView}>
              <AppText fontSize={30} style={styles.photo}>
                ED
              </AppText>
            </View>
            <AppText fontSize={30} style={styles.name}>
              Evan Doherty
            </AppText>
            <ButtonIcon
              name="dots-horizontal"
              backgroundColor={'transparent'}
              size={35}
            />
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  contactButton: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photoView: {
    backgroundColor: 'green',
    borderRadius: 50,
  },
  name: {
    paddingRight: 40,
  },
  photo: {
    padding: 10,
  },
})

export default Contacts

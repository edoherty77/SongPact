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
import ContactButton from '../components/ContactButton'

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
        <ContactButton initials={'ED'} name={'Evan Doherty'} />
        <ContactButton initials={'PD'} name={'Pat Doherty'} />
        <ContactButton initials={'SJ'} name={'Seth Johnson'} />
        <ContactButton initials={'MG'} name={'Michael Giannone'} />
        <ContactButton initials={'SN'} name={'Stephan Nale'} />
        <ContactButton initials={'CD'} name={'Christopher Dibona'} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default Contacts

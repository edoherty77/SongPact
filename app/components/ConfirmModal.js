import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import NativeModal from 'react-native-modal'
import AppText from './AppText'
import colors from '../config/colors'

export default function ConfirmModal({
  text,
  isVisible,
  onBackdropPress,
  confirm,
  deny,
}) {
  return (
    <NativeModal
      style={styles.infoModal}
      hasBackdrop={true}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
    >
      <View style={styles.modalView}>
        <AppText style={styles.modalName} fontSize={25}>
          {text}
        </AppText>
        <AppText onPress={confirm} style={styles.modalInfo} fontSize={25}>
          Yes
        </AppText>
        <AppText onPress={deny} style={styles.modalInfo} fontSize={25}>
          No
        </AppText>
      </View>
    </NativeModal>
  )
}

const styles = StyleSheet.create({
  infoModal: {
    backgroundColor: colors.lttan,
    marginHorizontal: 50,
    marginTop: 200,
    marginBottom: 250,
    padding: 0,
    borderRadius: 30,
  },
  modalView: {
    height: 350,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  modalName: {
    textAlign: 'center',
  },
})

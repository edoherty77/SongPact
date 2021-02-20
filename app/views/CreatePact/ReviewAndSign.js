import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import colors from '../../config/colors'
import Screen from '../../components/Screen'
import AppText from '../../components/AppText'
import Header from '../../components/Header'
import { Formik } from 'formik'
import AppButton from '../../components/AppButton'
import ButtonIcon from '../../components/ButtonIcon'
import ConfirmModal from '../../components/ConfirmModal'
import { useFormState, useFormDispatch } from '../../context/form-context'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import {
  createPact,
  createProducer,
  createPerformer,
} from '../../../src/graphql/mutations'
import config from '../../../src/aws-exports'
Amplify.configure(config)
import store from '../../stores/CreatePactStore'

import { SubmitButton } from '../../components/forms'
import * as Yup from 'yup'

export default function ReviewAndSign({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false)
  const [info, setInfo] = useState('')

  const getStoreInfo = () => {
    setInfo(store)
  }

  useEffect(() => {
    getStoreInfo()
    // console.log('STORE INFO', info)
  }, [])

  const handleAddPact = async () => {
    console.log('PACT INFO', info)

    const pactInfo = {
      type: info.type,
      recordTitle: info.recordTitle,
      initBy: info.initBy,
      sample: info.sample,
      labelName: info.labelName,
      recordLabel: info.recordLabel,
      createdAt: new Date().toISOString(),
      producer: {
        userId: info.producer.userId,
        advancePercent: info.producer.advancePercent,
        royaltyPercent: info.producer.royaltyPercent,
        publisherPercent: info.producer.publisherPercent,
        credit: info.producer.credit,
      },
      performers: [],
    }

    for (let i = 0; i < info.performers.length; i++) {
      pactInfo.performers.push(info.performers[i])
      await API.graphql(
        graphqlOperation(createPerformer, { input: info.performers[i] }),
      )
    }

    await API.graphql(graphqlOperation(createPact, { input: pactInfo }))
    await API.graphql(
      graphqlOperation(createProducer, { input: pactInfo.producer }),
    )
  }

  function trash() {
    setModalVisible(true)
  }

  function trashDeny() {
    setModalVisible(false)
  }

  function trashConfirm() {
    store.resetPact()
    setModalVisible(false)
    navigation.navigate('New')
  }

  async function addPact(values) {
    try {
      await API.graphql(graphqlOperation(createPact, values))
      console.log('pact successfully created.')
    } catch (err) {
      console.log('error creating pact...', err)
    }
  }

  return (
    <Screen>
      <Header
        back={() => navigation.navigate('RecordInfo')}
        icon="arrow-left-bold"
      />

      <View style={styles.footer}>
        <AppButton
          title="Sign and Send"
          style={styles.nextButton}
          onPress={handleAddPact}
        />
        <View style={styles.iconView}>
          <ButtonIcon
            onPress={trash}
            name="delete"
            backgroundColor="transparent"
            iconColor={colors.red}
          />
        </View>
      </View>

      <ConfirmModal
        text="Are you sure you'd like to delete?"
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        confirm={trashConfirm}
        deny={trashDeny}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor: 'orange',
  },
  footer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconView: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  nextButton: {
    marginBottom: 10,
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.red,
    width: '50%',
  },
})

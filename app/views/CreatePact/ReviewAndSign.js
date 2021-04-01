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
  createUserPact,
} from '../../../src/graphql/mutations'
import config from '../../../src/aws-exports'
Amplify.configure(config)
import store from '../../stores/CreatePactStore'

import { SubmitButton } from '../../components/forms'
import * as Yup from 'yup'

export default function ReviewAndSign({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false)

  const handleAddPact = async () => {
    try {
      for (let i = 0; i < store.performers.length; i++) {
        console.log('performersID', store.performers[i].userId)
        await API.graphql(
          graphqlOperation(createPerformer, {
            input: {
              performerUserId: store.performers[i].userId,
              performerPactId: store.pactId,
              userId: store.performers[i].userId,
              firstName: store.performers[i].firstName,
              lastName: store.performers[i].lastName,
              artistName: store.performers[i].artistName,
              publisherPercent: parseInt(store.performers[i].publisherPercent),
            },
          }),
        )
      }
    } catch (error) {
      console.log(error)
    }

    try {
      for (let i = 0; i < store.performers.length; i++) {
        console.log('USERPACTPERF', store.performers[i].userId)
        await API.graphql(
          graphqlOperation(createUserPact, {
            input: {
              userId: store.performers[i].userId,
              userPactPactId: store.pactId,
              userPactUserId: store.performers[i].userId,
            },
          }),
        )
      }
    } catch (error) {
      console.log(error)
    }

    try {
      console.log('CREATEPROD', store.producer.userId)
      await API.graphql(
        graphqlOperation(createProducer, {
          input: {
            producerPactId: store.pactId,
            producerUserId: store.producer.userId,
            advancePercent: parseInt(store.producer.advancePercent),
            royaltyPercent: parseInt(store.producer.royaltyPercent),
            publisherPercent: parseInt(store.producer.publisherPercent),
            credit: store.producer.credit,
            userId: store.producer.userId,
            artistName: store.producer.artistName,
            firstName: store.producer.firstName,
            lastName: store.producer.lastName,
          },
        }),
      )
    } catch (error) {
      console.log(error)
    }

    try {
      await API.graphql(
        graphqlOperation(createUserPact, {
          input: {
            userId: store.producer.userId,
            userPactPactId: store.pactId,
            userPactUserId: store.producer.userId,
          },
        }),
      )
    } catch (error) {
      console.log(error)
    }
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

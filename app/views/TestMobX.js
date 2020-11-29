import { StoreWriter } from "apollo-cache-inmemory"
import { configure } from "mobx"
import { observer } from "mobx-react"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import AppButton from "../components/AppButton"
import AppText from "../components/AppText"
import Header from "../components/Header"
import Screen from "../components/Screen"
import colors from "../config/colors"

import store from "../stores/TestStore"

const TestMobX = observer(({ values }) => {
  const increment = () => {
    store.increase()
  }

  return (
    <Screen>
      <Header title={store.value} noIcon />
      <AppButton
        title="+"
        color={colors.confirm}
        onPress={() => store.increase()}
      />
      <AppButton
        title="-"
        color={colors.danger}
        onPress={() => store.decrease()}
      />
      <AppText style={{ color: colors.white, alignSelf: "center" }}>
        {store.oddOrEven}
      </AppText>
    </Screen>
  )
})

export default TestMobX

const styles = StyleSheet.create({})

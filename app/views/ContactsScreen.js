import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import Header from "../components/Header"
import Screen from "../components/Screen"
import Separator from "../components/Separator"
import AppTextInput from "../components/AppTextInput"
import SubHeader from "../components/SubHeader"
import AppText from "../components/AppText"
import colors from "../config/colors"
import ButtonIcon from "../components/ButtonIcon"
import ContactButton from "../components/ContactButton"

function Contacts() {
  const [firstName, setFirstName] = useState("")
  return (
    <Screen>
      <Header title="Contacts" />
      <Separator />
      <View style={styles.inputView}>
        <AppTextInput
          width="90%"
          placeholder={"Search"}
          icon={"account-search"}
          style={styles.input}
        />
      </View>

      <View>
        <ContactButton initials={"CD"} name={"Christopher Dibona"} />
        <ContactButton initials={"ED"} name={"Evan Doherty"} />
        <ContactButton initials={"MG"} name={"Michael Giannone"} />
        <ContactButton initials={"PD"} name={"Pat Doherty"} />
        <ContactButton initials={"RK"} name={"Ryan Kleshefsky"} />
        <ContactButton initials={"SJ"} name={"Seth Johnson"} />
        <ContactButton initials={"SN"} name={"Stephan Nale"} />
        <ContactButton initials={"ZF"} name={"Zack Fye"} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  inputView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
    marginTop: 5,
  },
})

export default Contacts

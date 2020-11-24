import React from "react"
import { Text, StyleSheet } from "react-native"
import colors from "../config/colors"

export default function AppText({ children, style, fontSize, color }) {
  return (
    <Text style={[styles.text, { fontSize: fontSize, color: color }, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Avenir Next",
    color: colors.text,
  },
})

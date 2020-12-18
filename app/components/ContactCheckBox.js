import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'
import RNCheckboxCard from 'react-native-checkbox-card'

const ContactCheckBox = ({ children, title, onPress, name }) => {
  const [isSelected, setSelection] = useState(false)

  return (
    <View style={styles.mainView}>
      <RNCheckboxCard
        text={title}
        backgroundColor="pink"
        textStyle={styles.checkbox}
        onPress={onPress}
        // onPress={(checked: boolean) => console.log('Checked: ', checked)}
      />
    </View>
  )
}

export default ContactCheckBox

const styles = StyleSheet.create({
  mainView: { paddingBottom: 5 },
  checkbox: {
    textDecorationLine: 'none',
  },
})

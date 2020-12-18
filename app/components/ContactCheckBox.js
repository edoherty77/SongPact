import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'
import AppText from '../components/AppText'
import Separator from '../components/Separator'
import colors from '../config/colors'
import ButtonIcon from '../components/ButtonIcon'
import RNCheckboxCard from 'react-native-checkbox-card'
import { strike } from 'aws-amplify'
import { check } from 'graphql-anywhere'

const ContactCheckBox = ({ children, title, onPress, name }) => {
  const {
    setFieldValue,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext()
  const [isSelected, setSelection] = useState(false)

  return (
    <View style={styles.mainView}>
      {/* <AppText onPress={onPress} fontSize={25}>
        {title}
      </AppText> */}
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

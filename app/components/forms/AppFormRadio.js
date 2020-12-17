import React, { useState } from 'react'
import { useFormikContext } from 'formik'
import { View, Text, StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper'
import AppText from '../../components/AppText'
import ErrorMessage from './ErrorMessage'

const AppFormRadio = ({
  name,
  formikKey,
  value1,
  value2,
  width,
  ...otherProps
}) => {
  const { setFieldValue, handleChange, errors, touched } = useFormikContext()
  const [value, setValue] = useState('first')

  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => {
          setFieldValue(formikKey, value), setValue(value)
        }}
        value={value}
        {...otherProps}
      >
        <View style={styles.optionView}>
          <View style={styles.textView}>
            <AppText fontSize={20}>{value1}:</AppText>
          </View>
          <View style={styles.radioBtnView}>
            <RadioButton color="#42C1FC" value={value1} />
          </View>
        </View>
        <View style={styles.optionView}>
          <View style={styles.textView}>
            <AppText fontSize={20}>{value2}:</AppText>
          </View>
          <View style={styles.radioBtnView}>
            <RadioButton color="#42C1FC" value={value2} />
          </View>
        </View>
      </RadioButton.Group>

      {/* <ErrorMessage error={errors[name]} visible={touched[name]} /> */}
    </View>
  )
}

export default AppFormRadio

const styles = StyleSheet.create({
  optionView: {
    flexDirection: 'row',
    // backgroundColor: 'pink',
    alignItems: 'center',
    margin: 10,
    // justifyContent: 'space-around',
  },
  textView: {
    // backgroundColor: 'gray',
  },
  radioBtnView: {
    position: 'absolute',
    right: 170,
    margin: 10,
    // width: 20,
    borderRadius: 50,
    backgroundColor: 'lightgray',
  },
})

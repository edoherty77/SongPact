import React, { useState } from 'react'
import { useFormikContext } from 'formik'
import { View, Text } from 'react-native'
import { RadioButton } from 'react-native-paper'
import AppTextInput from '../AppTextInput'
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
    <>
      <RadioButton.Group
        onValueChange={(value) => {
          setFieldValue(formikKey, value), setValue(value)
        }}
        value={value}
        {...otherProps}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text>{value1}</Text>
          <RadioButton value={value1} />
        </View>
        <View>
          <Text>{value2}</Text>
          <RadioButton value={value2} />
        </View>
      </RadioButton.Group>

      {/* <ErrorMessage error={errors[name]} visible={touched[name]} /> */}
    </>
  )
}

export default AppFormRadio

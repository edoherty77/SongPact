import React, { useEffect } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { useFormikContext, useField } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

const AppFormField = ({ name, width, ...props }) => {
  const {
    setFieldTouched,
    handleChange,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext()

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        width={width}
        {...props}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField

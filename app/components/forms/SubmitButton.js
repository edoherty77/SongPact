import React from 'react'
import { useFormikContext } from 'formik'
import { Button } from 'react-native-paper'
import AppButton from '../AppButton'

const SubmitButton = ({ title, style, dismissKey, mode, onPress }) => {
  const { handleSubmit, values } = useFormikContext()

  return (
    <AppButton title={title} onPress={handleSubmit} style={style} />
    /* <AppButton onPress={onPress} title={title} style={style} /> */
  )
}

export default SubmitButton

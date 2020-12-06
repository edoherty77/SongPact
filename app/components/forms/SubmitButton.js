import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '../AppButton'

const SubmitButton = ({ title, style, dismissKey }) => {
  const { handleSubmit } = useFormikContext()

  return <AppButton title={title} onPress={handleSubmit} style={style} />
}

export default SubmitButton

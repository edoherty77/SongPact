import React from "react"
import { ErrorMessage, useFormikContext } from "formik"

import AppTextInput from "../AppTextInput"

const AppFormField = (name, width, ...otherProps) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField
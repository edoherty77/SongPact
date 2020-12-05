import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, width, ...otherProps }) => {
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.black}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    flexDirection: 'row',
    // padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
})

import React from 'react'
import { View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../config/colors'


const Icon = ({ backgroundColor = colors.medium, iconColor = colors.title, name, size = 40, style }) => {
  return (
    <View style={[{
      backgroundColor,
      width: size,
      height: size,
      borderRadius: size / 2,
      justifyContent: 'center',
      alignItems: 'center'
    }, style]}>
      <MaterialIcons
        name={name} size={size * 0.5} color={iconColor}
      />
    </View>
  )
}

export default Icon
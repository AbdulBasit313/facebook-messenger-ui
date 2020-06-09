import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

import defaultStyles from '../config/styles'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name='search1' size={20} color='#7A7A7A' style={styles.icon} />
      <TextInput placeholder='Search' style={styles.text} placeholderTextColor='#7A7A7A' />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: defaultStyles.colors.medium,
    borderRadius: 40,
    width: '100%',
    height: 45
  },
  icon: {
    marginLeft: 10,
    alignSelf: 'center'
  },
  text: {
    marginLeft: 5
  }
})
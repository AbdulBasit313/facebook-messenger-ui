import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'

import AppText from './AppText'
import defaultStyles from '../config/styles'

const ListItem = ({ avatar, name, message, seen, time }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Image source={avatar} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.name}>{name}</AppText>
          <View style={styles.messageContainer}>
            <AppText style={styles.message} numberOfLines={1}>{message}</AppText>
            <AppText style={styles.time}>{time}</AppText>
          </View>
        </View>
        {seen && <Image source={avatar} style={styles.seen} />}
      </View>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  detailsContainer: {
    marginLeft: 13,
    justifyContent: 'center',
    flex: 1
  },
  image: {
    borderRadius: 35,
    height: 60,
    width: 60,
  },
  message: {
    color: defaultStyles.colors.subTitle,
    fontSize: 15,
  },
  messageContainer: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 16,
    marginVertical: 3,
  },
  seen: {
    width: 17,
    height: 17,
    borderRadius: 30,
    marginRight: 15,
  },
  time: {
    color: defaultStyles.colors.subTitle,
    fontSize: 15,
    marginLeft: 10,
  },
})
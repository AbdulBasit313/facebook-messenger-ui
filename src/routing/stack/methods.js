import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import AppText from '../../components/AppText';
import Icon from '../../components/Icon';


export const LogoTitle = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require('../../assets/john.jpg')}
    />
    <AppText style={styles.title}>Chats</AppText>
  </View>
)

export const headerRight = () => (
  <View style={{ flexDirection: 'row', marginRight: 17 }}>
    <Icon name='camera-alt' size={38} style={{ marginRight: 13 }} />
    <Icon name='edit' size={38} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 35
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold'
  }
})
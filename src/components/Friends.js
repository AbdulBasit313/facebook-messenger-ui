import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from './Icon'
import colors from '../config/colors'

const friends = [
  {
    id: 1,
    avatar: require('../assets/sulaiman.jpg'),
    name: 'Hailey',
    newStatus: true,
    isActive: false,
  },
  {
    id: 2,
    avatar: require('../assets/hailey.jpg'),
    name: 'Sulaiman',
    newStatus: false,
    isActive: true,
  },
  {
    id: 3,
    avatar: require('../assets/akon.jpg'),
    name: 'Akon',
    newStatus: true,
    isActive: true,
  },
  {
    id: 4,
    avatar: require('../assets/sidra.jpg'),
    name: 'Sidra',
    newStatus: false,
    isActive: false,
  },
  {
    id: 5,
    avatar: require('../assets/john.jpg'),
    name: 'John',
    newStatus: false,
    isActive: true,
  },
  {
    id: 6,
    avatar: require('../assets/izaq.jpg'),
    name: 'Izaq',
    newStatus: true,
    isActive: true,
  },
  {
    id: 7,
    avatar: require('../assets/sara.jpg'),
    name: 'Sara',
    newStatus: false,
    isActive: false,
  },
]


const Friends = () => {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => console.log('values ==>')}>
        <View style={styles.friendsContainer}>
          <View style={item.newStatus && styles.statusOuter}>
            <View style={item.newStatus && styles.statusInner}>
              <Image source={item.avatar} style={[styles.avatar, item.newStatus ? {
                width: 38,
                height: 38,
              } : {
                  width: 50,
                  height: 50,
                }
              ]} />
            </View>
          </View>
          {item.isActive && <View style={styles.active} />}
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name='add' size={55} />
          <Text>Your Story</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={friends}
          keyExtractor={(friend) => friend.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  )
}

export default Friends

const styles = StyleSheet.create({
  active: {
    width: 17,
    height: 17,
    backgroundColor: colors.green,
    borderRadius: 10,
    position: 'absolute',
    borderWidth: 3,
    borderColor: colors.background,
    bottom: 23,
    right: 4
  },
  avatar: {
    borderRadius: 35
  },
  container: {
    flexDirection: 'row'
  },
  friendsContainer: {
    marginRight: 10,
    position: 'relative'
  },
  iconContainer: {
    marginRight: 10
  },
  statusInner: {
    borderColor: colors.background,
    borderWidth: 3,
    borderRadius: 35
  },
  statusOuter: {
    borderColor: colors.blue,
    borderWidth: 3,
    borderRadius: 35
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
  }
})
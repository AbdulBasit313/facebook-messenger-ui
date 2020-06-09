import React from 'react'
import { FlatList } from 'react-native'

import ListItem from './ListItem'

const messages = [
  {
    id: 1,
    avatar: require('../assets/michael.jpg'),
    name: 'Michael Fan',
    message: 'Sir is there class today?',
    unreadMessage: true,
    isActive: true,
    time: 'Sat',
    seen: true
  },
  {
    id: 2,
    avatar: require('../assets/sara.jpg'),
    name: 'Sara Ali',
    message: 'Hello John whats up?',
    unreadMessage: false,
    isActive: false,
    time: '9min',
    seen: false
  },
  {
    id: 3,
    avatar: require('../assets/izaq.jpg'),
    name: 'Izaq Khan',
    message: 'Hows your project?',
    unreadMessage: true,
    isActive: true,
    time: 'now',
    seen: true
  },
  {
    id: 4,
    avatar: require('../assets/sidra.jpg'),
    name: 'Sidra Ilahi',
    message: 'See you tomorrow',
    unreadMessage: true,
    isActive: false,
    time: '8:24am',
    seen: false
  },
  {
    id: 5,
    avatar: require('../assets/john.jpg'),
    name: 'John Doe',
    message: 'Don\'t forget to bring your resume',
    unreadMessage: false,
    isActive: true,
    time: 'Mon',
    seen: false
  },
  {
    id: 6,
    avatar: require('../assets/izaq.jpg'),
    name: 'Izaq Khan',
    message: 'See you tomorrow',
    unreadMessage: true,
    isActive: true,
    time: '9m',
    seen: false
  },
  {
    id: 7,
    avatar: require('../assets/sara.jpg'),
    name: 'Sara Ali',
    message: 'Don\'t forget to bring your resume',
    unreadMessage: false,
    isActive: false,
    time: 'now',
    seen: false
  },
  {
    id: 8,
    avatar: require('../assets/michael.jpg'),
    name: 'Michael Fan',
    message: 'Sir is there class today?',
    unreadMessage: true,
    isActive: true,
    time: 'Sat',
    seen: true
  },
]

const Messages = () => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) =>
        <ListItem
          avatar={item.avatar}
          name={item.name}
          message={item.message}
          seen={item.seen}
          time={item.time}
        />}
    />
  )
}

export default Messages
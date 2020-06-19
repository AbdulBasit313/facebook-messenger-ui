import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import PeopleIcon from 'react-native-vector-icons/MaterialIcons'

import { ChatStackScreen, PeopleStackScreen } from './stack';
import colors from '../config/colors';

const AppTab = createBottomTabNavigator()

const Root = () => {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: colors.background,
            borderTopWidth: 0
          },
          activeTintColor: colors.title,
          inactiveTintColor: colors.subTitle,
        }}
      >
        <AppTab.Screen
          name='Chats'
          component={ChatStackScreen}
          options={{
            tabBarIcon: ({ size, color }) => <ChatIcon name='chat' size={size} color={color} />
          }} />
        <AppTab.Screen
          name='People'
          component={PeopleStackScreen}
          options={{
            tabBarIcon: ({ size, color }) => <PeopleIcon name='people' size={size} color={color} />
          }} />
      </AppTab.Navigator>
    </NavigationContainer >
  )
}

export default Root
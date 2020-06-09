import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from '../../screens/ChatScreen';
import PeopleScreen from '../../screens/PeopleScreen';
import { LogoTitle, headerRight } from './methods';
import colors from '../../config/colors';

const ChatStack = createStackNavigator();
const PeopleStack = createStackNavigator();


export const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          backgroundColor: colors.background
        }
      }}
    >
      <ChatStack.Screen name='Chats' component={ChatScreen}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: headerRight
        }}
      />
    </ChatStack.Navigator>
  )
}

export const PeopleStackScreen = () => {
  return (
    <PeopleStack.Navigator>
      <PeopleStack.Screen name='People' component={PeopleScreen} />
    </PeopleStack.Navigator>
  )
}

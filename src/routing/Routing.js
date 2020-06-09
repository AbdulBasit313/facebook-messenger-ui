import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { ChatStackScreen, PeopleStackScreen } from './stack';
import colors from '../config/colors';

const AppTab = createBottomTabNavigator()

const Root = () => {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Chats') {
              iconName = 'chat'
            }
            else if (route.name === 'People') {
              iconName = 'nature-people'
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          style: {
            backgroundColor: colors.background,
            borderTopWidth: 0
          },
          activeTintColor: colors.title,
          inactiveTintColor: colors.subTitle,
        }}
      >
        <AppTab.Screen name='Chats' component={ChatStackScreen} />
        <AppTab.Screen name='People' component={PeopleStackScreen} />
      </AppTab.Navigator>
    </NavigationContainer >
  )
}

export default Root
import React from 'react'
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native'

import SearchBar from '../components/SearchBar'
import Friends from '../components/Friends'
import Messages from '../components/Messages'
import colors from '../config/colors'


const ChatScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
        <View style={{ paddingRight: 17, marginVertical: 5 }}>
          <SearchBar />
        </View>
        <View style={{ marginVertical: 13 }}>
          <Friends />
        </View>
        <Messages />
      </View>
    </ScrollView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingLeft: 17
  }
})
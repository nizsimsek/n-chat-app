import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ContactScreen from '../screens/ContactScreen/Contact.screen';
import ChatScreen from '../screens/ChatScreen/Chat.screen';
import SettingScreen from '../screens/SettingScreen/Setting.screen';


const Tab = createBottomTabNavigator();

const ChatTabNavigator = () => {
  return (
      <Tab.Navigator
        initialRouteName="Contacts"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Contacts" component={ContactScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
  )
}

export default ChatTabNavigator

const styles = StyleSheet.create({})
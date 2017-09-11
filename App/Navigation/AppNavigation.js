import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MyNotificationsSettingsScreen from '../Containers/MyNotificationsSettingsScreen'
import MySettingsScreen from '../Containers/MySettingsScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import ChatScreen from '../Containers/ChatScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
// const SecondaryNav = StackNavigator({
//   LoginScreen: { screen: LoginScreen },
//   LaunchScreen: { screen: LaunchScreen }
// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   initialRouteName: 'LoginScreen',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
// })

const SettingsTab = StackNavigator({
  Settings: {
    screen: MySettingsScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Settings',
    }),
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications',
    },
  },
});

const ChatTab = StackNavigator({
  Settings: {
    screen: ChatScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Chat',
    }),
  }
});

// The navigation of use is Tab Navigation
const PrimaryNav = TabNavigator({
  LoginScreen: {
    screen: LoginScreen,
    path: 'login'
  },
  LaunchScreen: {
    screen: LaunchScreen,
    path: 'launch'
  },
  ChatTab: {
    screen: ChatScreen,
    path: 'chat',
    navigationOptions: {
      tabBarLabel: 'Message',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  SettingsTab: {
    screen: SettingsTab,
    path: '/settings',
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
},{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  }
})

export default PrimaryNav
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoggedOut from './app/views/LoggedOut'
import ButtonIcon from './app/components/ButtonIcon'
import Dashboard from './app/views/Dashboard'
import Contacts from './app/views/Contacts'
import New from './app/views/NewSongPact'
import Notifications from './app/views/Notifications'
import Menu from './app/views/Menu'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarOptions={{
          activeTintColor: 'gold',
          // activeBackgroundColor: colors.primary,
          inactiveTintColor: '#303036',
          labelStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            paddingBottom: 40,
          },
          tabStyle: {
            height: 100,
            backgroundColor: '#30BCED',
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',

            tabBarIcon: ({ color, size }) => (
              <ButtonIcon
                name="home-outline"
                backgroundColor="transparent"
                iconColor="red"
              />
            ),
          }}
          name="Dashboard"
          component={Dashboard}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <ButtonIcon
                name="account-multiple"
                backgroundColor="transparent"
              />
            ),
            tabBarLabel: 'Contacts',
          }}
          name="Contacts"
          component={Contacts}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <ButtonIcon
                name="plus-circle"
                backgroundColor="transparent"
                iconColor="#303036"
              />
            ),
            tabBarLabel: '',
          }}
          name="New"
          component={New}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <ButtonIcon name="bell" backgroundColor="transparent" />
            ),
            tabBarLabel: 'Notifications',
          }}
          name="Notifications"
          component={Notifications}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <ButtonIcon name="menu" backgroundColor="transparent" />
            ),
            tabBarLabel: 'Menu',
          }}
          name="Menu"
          component={Menu}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30BCED',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

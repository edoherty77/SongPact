import React, { useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet } from 'react-native'

import ButtonIcon from '../components/ButtonIcon'
import Dashboard from '../views/DashboardScreen'
import Contacts from '../views/ContactsScreen'
import New from '../views/NewSongPactScreen'
import Notifications from '../views/NotificationsScreen'
import Menu from '../views/MenuScreen'
import colors from '../config/colors'

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        showLabel: false,
        style: {
          // marginBottom: 60,
          height: 90,
          marginTop: 0,
          borderTopColor: 'black',
          display: 'flex',
        },
        activeTintColor: colors.red,
        inactiveTintColor: colors.black,
        labelStyle: {
          display: 'flex',
          fontSize: 10,
          fontWeight: 'bold',
          paddingBottom: 45,
          fontFamily: 'Futura',
        },
        tabStyle: {
          height: 90,
          backgroundColor: colors.gray,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          name: 'Home',

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={30}
              backgroundColor="red"
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-multiple"
              color={color}
              size={30}
            />
          ),
          // tabBarLabel: 'Contacts',
        }}
        name="Contacts"
        component={Contacts}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={30}
            />
          ),
          // tabBarLabel: '',
        }}
        name="New"
        component={New}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={30} />
          ),
          // tabBarBadge: 3,
          // tabBarLabel: 'Notifications',
        }}
        name="Notifications"
        component={Notifications}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={30} />
          ),

          // tabBarLabel: 'Menu',
        }}
        name="Menu"
        component={Menu}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30BCED',
  },
})

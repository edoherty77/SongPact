import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DashboardStack from './DashboardStack'

const Drawer = createDrawerNavigator()

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}> */}
        <Drawer.Screen name="Home" component={DashboardStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

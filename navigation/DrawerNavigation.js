import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Icon} from '@rneui/themed';
import {colors} from '../global/styles';
import RootClientTabs from './ClientTabs';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                  name = "RootClientTabs"
                  component ={RootClientTabs}
                  options = {{
                      title:'Client',
                      drawerIcon: ({focussed,size}) =>(
                          <Icon 
                              type = "material-community"
                              name = "home"
                              color = {focussed ? '#7cc' :colors.grey2}
                              size = {size}
  
                          />
                      )
                  }}
            >

            </Drawer.Screen>
        </Drawer.Navigator>
    )
}
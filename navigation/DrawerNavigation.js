import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Icon} from '@rneui/themed';
import {colors} from '../global/styles';
import RootClientTabs from './ClientTabs';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen'
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(){
    return (
        <Drawer.Navigator
           drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                  name = "RootClientTabs"
                  component ={RootClientTabs}
                  options = {{
                      title:'Client',
                      drawerIcon: ({focused,size}) =>(
                          <Icon 
                              type = "material-community"
                              name = "home"
                              color = {focused ? '#7cc' :colors.grey2}
                              size = {size}
  
                          />
                      )
                  }}
            >

            </Drawer.Screen>
            <Drawer.Screen 
                name = "Business consoleScreen"
                component ={BusinessConsoleScreen}

                options = {{
                    title:'Business console',
                    drawerIcon: ({focussed,size}) =>(
                        <Icon 
                            type = "material"
                            name = "business"
                            color = {focussed ? '#7cc' :colors.grey2}
                            size = {size}

                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

import React from 'react'
import {Icon} from '@rneui/themed'
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, parameters} from '../global/styles'


const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs(){

    return (
    <ClientTabs.Navigator
    tabBarOptions = {{
        activeTintColor :colors.buttons
    }}
    >
        <ClientTabs.Screen
            name='HomeScreen'
            component={HomeScreen}
            options ={
                {
                    tabBarLabel : "Home",
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='home'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }
            }
        >

        </ClientTabs.Screen>
    </ClientTabs.Navigator>
    )
}
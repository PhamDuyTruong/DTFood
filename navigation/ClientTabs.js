
import React from 'react'
import {Icon} from '@rneui/themed'
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, parameters} from '../global/styles'
import MyAccountScreen from '../screens/MyAccountScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import ClientStack from './clientStack';


const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs(){

    return (
    <ClientTabs.Navigator
       tabBarOptions={{
            activeTintColor:colors.buttons
       }}
    >
        <ClientTabs.Screen
            name='Home'
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
        <ClientTabs.Screen
            name='SearchScreen'
            component={ClientStack}
            options ={
                {
                    tabBarLabel : "Search",
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='search'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }
            }
        >            
        </ClientTabs.Screen>
        <ClientTabs.Screen 
            name='MyOrdersScreen'
            component={MyOrderScreen}
            options ={
                {
                    tabBarLabel : "My Orders",
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='view-list'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }
            }

        />
        <ClientTabs.Screen 
            name='MyAccount'
            component={MyAccountScreen}
            options ={
                {
                    tabBarLabel : "My Account",
                    tabBarIcon: ({color,size})=>(
                        <Icon 
                            name ='person'
                            type = 'material'
                            color ={color}
                            size ={size}
                        />
                    )
                }
            }
        
        />
    </ClientTabs.Navigator>
    )
}
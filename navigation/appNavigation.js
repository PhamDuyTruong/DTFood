import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import DrawerNavigation from './DrawerNavigation';
import HomeScreen from '../screens/HomeScreen';

const App = createStackNavigator();


export function AppStack(){
    return (
        <App.Navigator>
            <App.Screen 
                name='AppScreen'
                component={DrawerNavigation}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </App.Navigator>
    )
}
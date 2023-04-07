import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {AuthStack} from './authNavigation'
import  {AppStack}  from './appNavigation';

export default function RootNavigation(){
    const isSignIn = false;
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
}
import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {AuthStack} from './authNavigation'
import  {AppStack}  from './appStack';

export default function RootNavigation(){
    const isSignIn = false;
    return (
        <NavigationContainer>
            {isSignIn ? (<AuthStack />) : (<AppStack/>)}
            
        </NavigationContainer>
    )
}
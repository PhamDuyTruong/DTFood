import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {AuthStack} from './authNavigation'
import  {AppStack}  from './appNavigation';
import { SignInContext } from '../context/authContext';

export default function RootNavigation(){
    const {signedIn} = useContext(SignInContext)
    return (
        <NavigationContainer>
           <AuthStack />
        </NavigationContainer>
    )
}
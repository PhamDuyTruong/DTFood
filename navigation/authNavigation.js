import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SigninWelcomeScreen from '../screens/authScreen/SigninWelcomeScreen';
import SigninScreen from '../screens/authScreen/SigninScreen';
import HomeScreen from '../screens/HomeScreen';

const Auth = createStackNavigator();

export function AuthStack(){
    return (
        <Auth.Navigator>
            <Auth.Screen 
                name='SignInWelcomeScreen'
                component={SigninWelcomeScreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen 
            
                name='SignInScreen'
                component={SigninScreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name='AppScreen'
                component={HomeScreen}
                options ={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            ></Auth.Screen>
        </Auth.Navigator>
    )
}

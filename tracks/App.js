import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import AccountScreen from './src/screens/AccoutScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';



import {Provider as AuthProvider} from './src/context/AuthContext'
import {Provider as LocationProvider} from './src/context/LocationContext'
import {setNavigator} from './src/navigationRef'

const switchNavigator = createSwitchNavigator({
    ResolveAuth : ResolveAuthScreen,
    loginFlow : createStackNavigator({
        Signup : SignupScreen,
        Signin : SigninScreen
       
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList : TrackListScreen,
            TrackDetail : TrackDetailScreen
        }),
        TrackCreate : TrackCreateScreen,
        Account : AccountScreen
    })
})

const App = createAppContainer(switchNavigator)

export default () =>{
    return <LocationProvider>
            <AuthProvider>
        <App ref={setNavigator}/>
    </AuthProvider>
    </LocationProvider>
}


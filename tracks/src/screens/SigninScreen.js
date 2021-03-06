import React,{useContext,useEffect} from 'react'
import {View,StyleSheet} from 'react-native'
import { NavigationEvents } from 'react-navigation'

import {Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SigninScreen = () =>{
    const {state,signin} = useContext(AuthContext)
 
    console.log(state)

  


    return (  
        <View style= {styles.container}>  
            {/* <NavigationEvents onWillBlur={clearErrorMessage} /> */}
            <AuthForm
                    headerText='Sign In for Tracker'
                    errorMessage={state.errorMessage}
                    buttonTitle="Sign In"
                    onSubmit={signin}
            />
            <NavLink 
                routeName ='Signup'
                text="Don't have an account? Sign Up here"
            />
          
        </View>
    )
}


SigninScreen.navigationOptions = () =>{
    return {
        headerShown : false
    }
}


const styles = StyleSheet.create({
    container:{
        margin:5,
        flex:1,
        justifyContent:'center',
        marginBottom:250,
    }
})



export default SigninScreen
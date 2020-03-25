import React,{useContext,useEffect} from 'react'
import {View,StyleSheet} from 'react-native'
import {Context as AuthContext} from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({navigation}) =>{
    const {state,signup} = useContext(AuthContext)
 



    console.log(state)

    return (  
        <View style= {styles.container}> 
            {/* <NavigationEvents onWillBlur={clearErrorMessage} />  */}
            <AuthForm
                    headerText='Sign Up for Tracker'
                    errorMessage={state.errorMessage}
                    buttonTitle="Sign Up"
                    onSubmit={signup}
            />
            <NavLink
                    routeName='Signin'
                    text='Already have an account? Sign In here.'
            />
          
        </View>
)}


SignupScreen.navigationOptions = () =>{
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

export default SignupScreen
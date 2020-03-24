import React,{useContext} from 'react'
import {View,StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import {Context as AuthContect} from '../context/AuthContext'
import Spacer from '../components/Spacer'
import AuthForm from '../components/AuthForm'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SignupScreen = ({navigation}) =>{
    const {state,signup} = useContext(AuthContect)
 

    console.log(state)

    return (  
        <View style= {styles.container}>  
            <AuthForm
                    headerText='Sign Up for Tracker'
                    errorMessage={state.errorMessage}
                    buttonTitle="Sign Up"
                    onSubmit={signup}
            />
            <Spacer>
                <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
                    <Text style={styles.navLink}>Already have an account ? Sign in instead.</Text>
                </TouchableOpacity>
            </Spacer>
          
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
    },

    navLink:{
        fontSize:18,
        color:'blue'
    }
})

export default SignupScreen
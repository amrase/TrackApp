import React,{useState,useContext} from 'react'
import {View,StyleSheet} from 'react-native'
import {Text,Input,Button} from 'react-native-elements'
import {Context as AuthContect} from '../context/AuthContext'
import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) =>{
    const {state,signup} = useContext(AuthContect)
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')

    console.log(state)

    return (  
    <View style= {styles.container}>  
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
            <Input 
                    autoCapitalize='none'
                    autoCorrect={false}
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
            />
        <Spacer/>
            <Input 
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
            />
            <Spacer>
            { state.errorMessage ? <Text style={styles.errorText}>{state.errorMessage}</Text>: null}
            </Spacer>
            <Spacer>
                <Button title='Sign Up' onPress={()=>signup({email,password})}/>
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
        flex:1,
        justifyContent:'center',
        marginBottom:250,
    },
    errorText:{
        fontSize:18,
        color:'red'
    }
})

export default SignupScreen
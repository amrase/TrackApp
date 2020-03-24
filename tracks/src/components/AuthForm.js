import React,{useState} from 'react'
import {View,StyleSheet} from 'react-native'
import {Text,Input,Button} from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({headerText,errorMessage,buttonTitle,onSubmit}) =>{
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')
    return (
        <>
            <Spacer>
            <Text h3>{headerText}</Text>
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
            { errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text>: null}
            </Spacer>
            <Spacer>
                <Button title={buttonTitle} onPress={()=>onSubmit({email,password})}/>
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorText:{
        fontSize:18,
        color:'red'
    },
})

export default AuthForm
import React, { useContext } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Button} from 'react-native-elements'

import {Context as AuthContext} from '../context/AuthContext'

const AccountScreen = () =>{
    const {signout} = useContext(AuthContext)
    return (  
        <> 
        <Text style={{fontSize:48, marginTop:100}}>AccountScreen</Text>
        <Button title='Sign Out' onPress={signout}/>
        </>
)}


const styles = StyleSheet.create({

})

export default AccountScreen
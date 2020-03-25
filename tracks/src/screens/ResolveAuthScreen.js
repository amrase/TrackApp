import React,{useEffect,useContext,useState} from 'react'
import {View,StyleSheet,ActivityIndicator,Text} from 'react-native'
import {Context as AuthContext} from '../context/AuthContext'


const ResolveAuthScreen  = () => {
    const {tryLocalSignin} = useContext(AuthContext)

    useEffect(() => {
       tryLocalSignin()
    }, [])

    return null
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }

});

export default ResolveAuthScreen
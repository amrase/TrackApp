// import '../_mockLocation'
import React,{useState,useEffect,useContext} from 'react'
import {StyleSheet} from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import {Context as LocationContext} from '../context/LocationContext'
import { 
    requestPermissionsAsync,
    watchPositionAsync,Accuracy 
} from 'expo-location'

const TrackCreateScreen = () =>{
    const {addLocation} = useContext(LocationContext)
    const [err,setErr] = useState(null)


    const startWatching = async() =>{
        try{
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval:10
            },(location)=>{
                addLocation(location)
            })
        }
        catch(error){
            setErr(error)
            console.log(error)
        }
    }

    useEffect(() => {
       startWatching()
    }, [])



    return ( 
        <SafeAreaView forceInset={{tope: 'always'}} >
        <Text h2>Create a Track </Text>
        <Map/>
        {err ? <Text>Please enable location</Text> : null}
        </SafeAreaView>
)}


const styles = StyleSheet.create({
  
})

export default TrackCreateScreen
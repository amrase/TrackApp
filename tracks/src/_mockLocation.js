import * as Location from 'expo-location'


const tenMetersWithDegrees = 0.0001;

const getLocation = increment =>{
    //fake location 
    return {
        timestamp : 1000000,      
        coods:{
            speed: 0,
            heading :0,
            accurancy : 5,
            altitudeAccurancy : 5,
            altitude: 5,
            longitude: -122.0312186  + increment * tenMetersWithDegrees,
            latitude : 37.33233141+ increment * tenMetersWithDegrees
        }
    }
}

let counter = 0;

setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId: Location._getCurrentWatchId(),
        location : getLocation(counter)
    });
    counter++;
},1000)
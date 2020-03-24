import {AsyncStorage} from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'


const authReducer  = (state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state,errorMessage:action.payload}
        case 'signup':
            return {errorMessage:'',token:action.payload}    
        default:
            return state
    }

}


const signup = (dispatch) =>{
    return async ({email,password}) =>{
        //make api request to sign up with that email and password
        try{
            const response = await trackerApi.post('/signup',{email,password})
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type:'signup',payload:response.data.token})
        }
        catch(err){
            console.log(err.message)
            dispatch({type:'add_error',payload:'Something went wrong'})
        }
    
    }
}

const signin = (dispatch) =>{
    return () =>{

    }
}

const signout = () =>{
    return () =>{

    }
}

export const {Provider,Context} = createDataContext(
    authReducer,
    {signup,signin,signout},
    {token:null,errorMessage:''}
)
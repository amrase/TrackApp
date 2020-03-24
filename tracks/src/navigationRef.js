import {NavigationActions} from 'react-navigation'

let navigator;

//navigate to different screens
export const setNavigator = (nav) => {
    navigator = nav;
}

export const navigate = (routeName,params) =>{
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
            // routeName: routeName,
            // params : params
        })
    )
}
import Axios from 'axios'
import { ADMIN_LOGIN } from './index'

const baseUrlServer = 'http://localhost:5000'


export const loginAction =(username, password)=>{
    return dispatch=>{
        console.log(username,password)
        Axios.post(baseUrlServer + "/user/login", {
        username,
        password,
        })
        .then(({data})=>{
            dispatch({type:ADMIN_LOGIN})
            localStorage.setItem('access_token', data.access_token)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}


export  const keepLoginAction=()=>{
    return dispatch =>{
        dispatch({type:ADMIN_LOGIN})
    }
}

export const logoutAction=()=>{
    return dispatch =>{
        console.log('masuk')
        dispatch({type:'LOGOUT_SUCCESS'})
        localStorage.removeItem('access_token')
    }
}
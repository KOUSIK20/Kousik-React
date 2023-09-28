import React from 'react'
import { Navigate,useLocation } from 'react-router-dom'
import {useAuth} from './Auth'
export const RequiredAuth = ({children}) => {
    const location =useLocation()
    const Auth = useAuth()
    if(!Auth?.user){
        return <Navigate to='/login' state={{path:location.pathname}}/>
    }
  return children
   
  }


import React from 'react'
import {useAuth} from './Auth' 
import { useNavigate } from 'react-router-dom'
export const Profile = () => {
    const Auth = useAuth()
    const navigate = useNavigate()
    const handleLogout= ()=>{
        Auth.logout()
        navigate('/login')
    }
  return (
    <div>Welcome  {Auth.user}
    <button onClick={handleLogout }>Logout</button>
    </div>
    
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import {useAuth} from './Auth'

export const Navbar = () => {
  const Auth = useAuth()
  return (
    <nav >
       {!Auth.user &&(
          <NavLink  to='/login'>Login </NavLink>
        )}
       <NavLink to ='/'>Home</NavLink>
       <NavLink to ='/wrap'>Todo Notes</NavLink>
       <NavLink to='/weather'>WeatherApp</NavLink>
       <NavLink to= '/bmi'>BMI</NavLink>
       <NavLink to='/game'>Game</NavLink>
       <NavLink to='/about'>About</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
       <NavLink to ='/userslice'>UserView</NavLink>
       <NavLink to='/profile'>Profile</NavLink>
       
       
       
       
    </nav>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import {useAuth} from './Auth'

export const Navbar = () => {
  const Auth = useAuth()
  return (
    <nav >
       <NavLink to ='/'>Home</NavLink>
       <NavLink to='/about'>About</NavLink>
       <NavLink to='/products'>Products</NavLink>
       <NavLink to='/profile'>Profile</NavLink>
       <NavLink to='/shop'>Shop</NavLink>
       <NavLink to ='/userslice'>UserView</NavLink>
       
        {!Auth.user &&(
          <NavLink  to='/login'>Login </NavLink>
        )}
    </nav>
  )
}

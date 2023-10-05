import React from 'react';
import {AuthProvider } from './Components/Auth'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { RequiredAuth } from './Components/RequiredAuth';
//import { About } from './Components/About';
import { Navbar } from './Components/Navbar';

import { Nomatch } from './Components/Nomatch';
import { Users } from './Components/Users';
import { Userdetails } from './Components/Userdetails';
import { Admin } from './Components/Admin';
import { Profile } from './Components/Profile';
import './App.css'
import {CakeView} from './features/cakes/CakeView'
import {IcecreamView} from './features/iceCream/IcecreamView'
import {UserView} from './features/user/UserView'
import { Shop } from './features/Shop';
import { Game } from './Components/Game';
import { TodoWrapper } from './Components/TodoWrapper';
//import { Todo } from './Components/Todo';
import { TodoForm } from './Components/TodoForm';
import { WeatherApp } from './Components/WeatherApp';
const LazyAbout = React.lazy(()=>import('./Components/About'))
function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Navbar/>
    <Routes>
    <Route path='profile'element={<RequiredAuth><Profile/></RequiredAuth>}/>
    <Route path='login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<React.Suspense fallback ='Loading...'><LazyAbout/></React.Suspense>}/>
      
      <Route path="*" element={<Nomatch/>}/>
      <Route path='users'element={<Users/>}>
      <Route path=':userId'element={<Userdetails/>}/>
      <Route path='admin'element={<Admin/>}/>
      
      </Route>
       <Route path='shop'element={<Shop/>}/>
     
        <Route path='cake' element={<CakeView/>}/>
        <Route path='Icecream' element={<IcecreamView/>}/>
        <Route path='userslice'element={<UserView/>}/>
        
      
      
      <Route path='wrap' element={<TodoWrapper/>}/>
      <Route path='todoform' element={<TodoForm/>}/>
      <Route path='game' element={<Game/>} />
      <Route path='weather' element={<WeatherApp/>}/>
    </Routes>
    </AuthProvider>
    
    </BrowserRouter>
   
  );
}

export default App;

import React from 'react';
import {AuthProvider } from './Components/Auth'
import {Routes,Route} from 'react-router-dom'
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { RequiredAuth } from './Components/RequiredAuth';
//import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { Ordersummary } from './Components/Ordersummary';
import { Nomatch } from './Components/Nomatch';
import { Products } from './Components/Products';
import { Featuredproducts } from './Components/Featuredproducts';
import { Newproducts } from './Components/Newproducts';
import { Users } from './Components/Users';
import { Userdetails } from './Components/Userdetails';
import { Admin } from './Components/Admin';
import { Profile } from './Components/Profile';

const LazyAbout = React.lazy(()=>import('./Components/About'))
function App() {
  return (
    
    <AuthProvider>
    <Navbar/>
    <Routes>
    <Route path='profile'element={<RequiredAuth><Profile/></RequiredAuth>}/>
    <Route path='login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<React.Suspense fallback ='Loading...'><LazyAbout/></React.Suspense>}/>
      <Route path='order-summary'element={<Ordersummary/>}/>
      <Route path="*" element={<Nomatch/>}/>
      <Route path='users'element={<Users/>}>
      <Route path=':userId'element={<Userdetails/>}/>
      <Route path='admin'element={<Admin/>}/>
      
      </Route>

     
      
      
      <Route path='products' element={<Products/>}>
        <Route index element={<Featuredproducts/>}/>
        <Route path='featured' element={<Featuredproducts/>}/>
        <Route path='new' element={<Newproducts/>}/>
        </Route>
      
    </Routes>
    </AuthProvider>
    
    
   
  );
}

export default App;

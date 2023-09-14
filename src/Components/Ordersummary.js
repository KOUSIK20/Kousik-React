import React from 'react'
import { useNavigate } from 'react-router-dom' 
export const Ordersummary = () => {
    const navigate = useNavigate()
  return (
  <>
  <div>Order Confirmed !</div>
  <button onClick={()=>navigate('/')}>Go Back</button>
  
  
  </>
    
  )
}

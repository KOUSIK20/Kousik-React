import {useState} from 'react'
import {useAuth} from './Auth'
import { useNavigate  } from 'react-router-dom'

export const Login = () => {
    const[user,setUser] = useState('')
    const Auth = useAuth()
    const navigate = useNavigate()
    
    //const redirectPath = location.stae?.path|| '/'
    const handleLogin = ()=>{
        Auth.login(user)
        navigate('/')
    }
  return (
    <div>
        <label>
            Username:{''}
            <input type ='text' onChange={(e)=>setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

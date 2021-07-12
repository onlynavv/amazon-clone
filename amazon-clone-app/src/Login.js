import React,{useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import {auth} from './firebase'

const Login = () => {

    const history = useHistory()
    const[email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                history.push('/')
            }
        }).catch((error)=>alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG24.png' alt='logo'></img>
            </Link>
            
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>

                    <button type='submit' className='login-signinButton' onClick={signIn}>Sign In</button>
                </form>

                <p>By signing in you have agreed to the Terms and Conditions of Use and Sale</p>

                <button className='login-registerButton' onClick={register}>Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

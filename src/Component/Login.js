import React, { useState } from 'react'
import axios from 'axios'
import '../ComponentCss/Component.css'
import { Button, Form } from 'react-bootstrap'
import {
    NavLink
} from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginerror, setLoginerror] = useState('');
    const formHandling =  (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/Auth/', { username, password })
            .then(res => {
                localStorage.setItem('token', res.data.token)
                window.location.href = "http://localhost:3000";
            })
            .catch(error => {
                setLoginerror(error)                
            })
    }
    return (
        <div className='formbody backgound'>           
            <div >
                <div className='Container mt-4 forms '>
                    <h1>Login</h1>
                    {
                        loginerror ? <p className='errormsg'> please enter correct email and password </p>: ''
                    }
                    <form onSubmit={formHandling}>
                        <Form.Control type="text" placeholder="Username" className='mb-4 mail fi shadow-none' required name='username' onChange={e => setUsername(e.target.value)} />
                        <Form.Control type="password" placeholder="password" className='mb-4 mail fi shadow-none' required name='password' onChange={e => setPassword(e.target.value)} />                                              
                        <Button type='submit' className='fb shadow-none mb-4' >Login</Button>
                        <NavLink to='/Forgot-password' className='signuplink'>Forgot Password ?</NavLink> 
                        <p>Don't have an account ? <NavLink to='/signup' className='signuplink'>signup </NavLink> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

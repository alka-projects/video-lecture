import React, { useState } from 'react'
import axios from 'axios'
import '../ComponentCss/Component.css'
import {Button,  Form} from 'react-bootstrap'
import {
    useHistory,
    NavLink
} from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory() 
    const formHandling =  (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/Signup/', { username,email, password })
            .then(res => {
                console.log(res.data);
                // localStorage.setItem('token', res.data.token)
                // window.location.href = "http://localhost:3000/Login";
                history.push('/Login/')
            })
            .catch(error => {
                console.log(error);
            })

    }

    const usernameHandler = (e) => {
        setEmail(e.target.value)
        setUsername(e.target.value)
    }
    
    return (
        <div className='formbody backgound'>           
            <div >
                <div className='Container mt-4 forms '>
                    <h1>Signup</h1>
                    <form onSubmit={formHandling}>
                        {/* <Form.Control type="hidden" placeholder="Username" className='mb-4 mail' name='username' onChange={e => setEmail(username)} /> */}
                        <Form.Control type="email" placeholder="Email" className='mb-4 fi shadow-none' name='email' required onChange={usernameHandler} />
                        <Form.Control type="password" placeholder="password" className='mb-4 fi shadow-none' name='password' required onChange={e => setPassword(e.target.value)} />
                        <Button type='submit' variant='primary fb mb-4' >Signup</Button>
                        <p>Already have an account ? <NavLink to='/login' className='signuplink'>signup </NavLink> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup

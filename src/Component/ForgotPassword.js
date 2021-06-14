import React, { useState , useEffect} from 'react'
import axios from 'axios'
import '../ComponentCss/Component.css'
import {Button,  Form} from 'react-bootstrap'
import {
    useHistory,
    NavLink
} from 'react-router-dom';

function ForgotPassword() {
    const [email, setemail] = useState('')
    const [user , setuser] = useState([])
    const history = useHistory() 

    const formHandler =  (e) => {
        e.preventDefault()
        axios.get(`http://127.0.0.1:8000/Usersearch/?mysearch=${email}`)
            .then(res => {
                console.log(res.data); 
                setuser(res.data);
                console.log(user);
                // localStorage.setItem('token', res.data.token)
                // window.location.href = "http://localhost:3000/Login";
                // history.push('/Login/')
            })
            .catch(error => {
                console.log(error);
            })

    }
    const usernameHandler = (e) =>{
        setemail(e.target.value)
    }
    return (
        <div className='formbody backgound'>           
            <div >                               
                <div className='Container mt-4 forms '>
                {
                    user ? '': 'ali'
                } 
                    <h3 className='mb-4'>Reset Your Password</h3>
                    <form onSubmit={formHandler}>
                        <Form.Control type="email" placeholder="Enter Your Email" className='mb-4 fi shadow-none' name='email' required onChange={usernameHandler} />
                        <Button type='submit' variant='primary fb mb-4' >Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword

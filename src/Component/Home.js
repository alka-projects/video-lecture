import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../ComponentCss/Home.css'
import HomeCarousel from './HomeCarousel'
import HomeFirst from './HomeFirst'
import HomeSecond from './HomeSecond'

const Home = () => {
    const [posts, setPosts] = useState([])
    let tokens = localStorage.getItem('token');
    // const token = user.token;

    useEffect(() => {
        // axios.post('http://127.0.0.1:8000/Auth/refresh/',  {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body : {
        //         'refresh' : tokens,
        //     }
        // })        
        axios.get('http://127.0.0.1:8000/Login/', {
            headers: {
                'authorization': 'JWT ' + tokens,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res.data);
                setPosts(res.data)
                // window.location.href = "http://localhost:3000"; 

            })
            .catch(error => {
                console.log(error);
            })

    }, [])

    return (
        <div className='homebody'>
            <HomeCarousel />
            <HomeFirst name='Html Lecture' />
            <HomeFirst name='Css Lecture' />
            <HomeSecond name='Django Lecture' />
            <HomeFirst name='Python Lecture' />
            <HomeSecond name='Jquery Lecture' />
            <div className='container'>
                {posts.map(post => <div key={post.id}> <h1>user name : post :{post.id}  {post.username}</h1>
                    <h1>user email : {post.email}</h1>  </div>)}
                <h1>hqq</h1>
            </div>

        </div>
    )
}

export default Home


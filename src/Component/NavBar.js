import React from 'react'
import Login from './Login'
import Signup from './Signup'
import ForgotPassword from './ForgotPassword'
import PlayLecture from './PlayLecture'
import Home from "./Home";
import '../ComponentCss/Component.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap'
import AllLecture from './AllLecture';
function NavBar() {
    const logout = () => {
        localStorage.clear()
        console.log('clear');
        window.location.href = "http://localhost:3000/";
    }
    let token = localStorage.getItem('token')
    return (
        <>
            <Router>
                <Navbar collapseOnSelect expand="lg" className='nb d-flex flex-row justify-content-between' fixed="top">
                    <Navbar.Brand href="#home" className='nbr'>LearningMadeEasy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nbr' />
                    <Navbar.Collapse id="responsive-navbar-nav " className='nbr'>
                        <Nav className="mr-auto nv" >
                            <NavLink to="/" className='nav-link nbr'> Home </NavLink>
                            <NavLink to="/features" className='nav-link nbr'>Features</NavLink>
                            <NavLink to="/pricing" className='nav-link nbr'>Pricing</NavLink>
                        </Nav>
                        {/* <Form inline className="mr-4 dflex flex-row justify-contant-between">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form> */}
                        <Nav className="ml-4">{
                         token ?
                            <NavLink to='/' className='nav-link nbr' onClick={logout}> <i className='fa fa-sign-out'></i>Logout </NavLink> 
                           :
                           <React.Fragment>
                            <NavLink to="/Login" className='nav-link nbr'> <i className='fa fa-sign-in'></i> Login  </NavLink>
                            <NavLink to="/Signup" className='nav-link nbr'> <i className='fa fa-user-plus'></i>Signup </NavLink>
                            </React.Fragment>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/Login' component={Login}></Route>
                    <Route path='/Signup' component={Signup}></Route>
                    <Route path='/Forgot-password' component={ForgotPassword}></Route>
                    <Route path='/AllLecture' component={AllLecture}></Route>
                    <Route path='/PlayLecture' component={PlayLecture}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default NavBar
